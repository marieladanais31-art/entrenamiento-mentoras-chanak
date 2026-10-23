"""Genera el manual de Coordinación desde la fuente que consume training."""
import json
import shutil
import subprocess
from html import escape
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether, Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/manual-coordinacion'
OUT.mkdir(parents=True, exist_ok=True)
data = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', "import {MANUAL_COORDINACION as m} from './src/data/manualCoordinacion.js';console.log(JSON.stringify(m))"], cwd=ROOT))
for name, file in [('Chanak', 'DejaVuSans.ttf'), ('ChanakBold', 'DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, '/usr/share/fonts/truetype/dejavu/' + file))
NAVY = colors.HexColor('#133854')
TEAL = colors.HexColor('#187d7b')
styles = {
    'body': ParagraphStyle('Body', fontName='Chanak', fontSize=10.5, leading=16, spaceAfter=9, textColor=NAVY),
    'title': ParagraphStyle('Title', fontName='ChanakBold', fontSize=22, leading=28, spaceAfter=18, textColor=NAVY),
    'sub': ParagraphStyle('Sub', fontName='ChanakBold', fontSize=13, leading=18, spaceBefore=12, spaceAfter=8, textColor=TEAL, keepWithNext=True),
    'label': ParagraphStyle('Label', fontName='ChanakBold', fontSize=9, leading=13, spaceAfter=10, textColor=TEAL),
}
story = []
md = ['# ' + data['titulo'], 'Versión ' + data['version'], data['proposito']]

def p(text, style='body'):
    text = str(text).replace('→', ' > ').replace('–', '-').replace('—', '-').replace('\u2011', '-')
    return Paragraph(escape(text), styles[style])

def block(title, text):
    story.extend([p(title, 'sub'), p(text)])
    md.extend(['\n## ' + title, text])

def page(canvas, doc):
    w, h = A4
    canvas.setFillColor(NAVY); canvas.rect(0, h-12, w, 12, fill=1, stroke=0)
    canvas.setStrokeColor(colors.HexColor('#b49a55')); canvas.line(46, 43, w-46, 43)
    canvas.setFillColor(NAVY); canvas.setFont('Chanak', 8)
    canvas.drawString(46, 28, 'CHANAK / COORDINACIÓN ACADÉMICA / 23.10.2026')
    canvas.drawRightString(w-46, 28, str(doc.page))

logo=ROOT/'public/logo-chanak.png'
if logo.exists(): story.append(Image(str(logo), width=82, height=82, hAlign='LEFT'))
story.extend([Spacer(1, 25), p('FORMACIÓN DEL EQUIPO CHANAK', 'label'), p('Coordinación académica', 'title'), p('Perfil y manual operativo del SIS', 'sub'), p(data['proposito'])])
block('Para quién es', 'Coordinadoras de centros físicos o virtuales, grupos Off-Campus y programas de colegios aliados, dentro de su asignación y del convenio aplicable. El cargo es distinto del de mentor general, profesor de Inglés, Life Skills y Administración.')
block('Qué incluye', 'Alcance del cargo, supervisión del equipo, once pestañas del SIS con pasos de operación, motivación y coins, rutina, registros y lista de cierre. Los casos prácticos se realizan únicamente en la app de training. La revisión de código no certifica permisos efectivos ni despliegue.')
story.append(PageBreak());story.append(p('Alcance y acceso', 'title'))
for a in data['alcance']: block(a['titulo'], a['texto'])
block('Antes de trabajar', 'Comprueba cuenta, rol, hub y estudiantes. No operes expedientes ajenos aunque aparezcan por una incidencia de configuración.')
for s in data['accesos']: story.append(p(s));md.append(s)
story.append(PageBreak());story.append(p(data['cobertura']['titulo'], 'title'))
story.append(p(data['cobertura']['texto']))
for programa, estado, detalle in data['cobertura']['programas']:
    block(programa + ' - ' + estado, detalle)
story.append(p(data['cobertura']['aclaracion']))
story.append(PageBreak());story.append(p('Supervisar sin mezclar funciones', 'title'))
for nombre, funcion, supervision in data['equipo']:
    story.append(KeepTogether([p(nombre,'sub'),p(funcion),p('Coordinación: '+supervision)]))
    md.extend(['\n## '+nombre, funcion, 'Coordinación: '+supervision])
story.append(PageBreak());story.append(p('Mi rutina', 'title'))
for cuando, que in data['rutina']: block(cuando, que)
for proc in data['procedimientos']:
    story.append(PageBreak());story.extend([p('PROCEDIMIENTO SIS', 'label'),p(proc['titulo'],'title'),p(proc['objetivo'])])
    md.extend(['\n## '+proc['titulo'], proc['objetivo']])
    for i,s in enumerate(proc['pasos'],1):story.append(p(f'{i}. {s}'));md.append(f'{i}. {s}')
    story.append(KeepTogether([p('Comprobación al terminar','sub'),p(proc['cierre'])]))
    md.append('Cierre: '+proc['cierre'])
story.append(PageBreak());story.append(p('Motivación y ChanakCoins', 'title'))
for s in data['coins']:story.append(p(s));md.append(s)
block('Motivar al equipo y al estudiante', 'Pide al mentor un objetivo concreto, la evidencia del logro y un próximo paso. Reconoce avances reales, no solo resultados perfectos. Con Inglés y Life Skills acuerda criterios consistentes para que una actividad no se premie dos veces. Escucha a la familia y ajusta apoyos sin alterar notas para motivar.')
story.append(PageBreak());story.append(p('Registro y cierre', 'title'))
for s in data['registros']:story.append(p('- '+s));md.append('- '+s)
block('Plantilla de pendiente', 'Estudiante / programa / periodo: ____. Hecho verificado: ____. Evidencia: ____. Acción o apoyo: ____. Responsable: ____. Fecha de revisión: ____. Estado y resultado comprobado: ____. Decisión que requiere Dirección o Administración: ____.')
block('Lista antes de cerrar el periodo', 'Responsables confirmados; PEI vigente y validado; notas y evidencias conciliadas; devoluciones resueltas o documentadas; créditos cotejados cuando apliquen; boletín revisado y autorización de publicación; comunicación clara con la familia; incidencias administrativas derivadas por separado.')
story.append(PageBreak());story.append(p('Fuentes y puntos por validar', 'title'))
for s in data['fuentes']:story.append(p(s));md.append(s)
block('Advertencias concretas para el responsable técnico', 'Comprobar aislamiento por hub cuando falta hub_id; separar tutor principal de especialistas; validar en servidor quién aprueba/publica planes y boletines; comprobar la conciliación LMS-SIS. No se han cambiado esas apps ni sus bases para elaborar este manual.')
url='https://github.com/marieladanais31-art/chanak-sis/tree/0386a1887970cbd022c449cb8964b2c93295d31a'
story.append(Paragraph(f'<link href="{url}" color="#187d7b">Abrir versión del SIS revisada</link>',styles['body']))
pdf=OUT/'Manual_Coordinacion_SIS_Chanak_2026-10.pdf'
SimpleDocTemplate(str(pdf), pagesize=A4, leftMargin=46,rightMargin=46,topMargin=43,bottomMargin=57,title=data['titulo'],author='Chanak International Academy').build(story,onFirstPage=page,onLaterPages=page)
(OUT/'Manual_Coordinacion_SIS_Chanak_2026-10.md').write_text('\n\n'.join(md),encoding='utf-8')
(ROOT/'docs/MANUAL_COORDINACION_SIS_2026_10.md').write_text('\n\n'.join(md),encoding='utf-8')
for path in ['public/manuales/manual-coordinacion-sis-2026-10.pdf','public/formacion/GUIA_COORDINADOR_PANTALLAS_SIS_2026-2027.pdf']:
    target=ROOT/path;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(pdf,target)
print(pdf)
