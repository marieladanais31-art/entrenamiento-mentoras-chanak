"""Regenera PDF y Markdown desde la misma fuente que consume React.

Uso: python3 scripts/generar-manual-mentoras.py
Requiere node y reportlab. No accede a redes ni bases de datos.
"""
import json
import shutil
import subprocess
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether, Image, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/manual-mentoras'
OUT.mkdir(parents=True, exist_ok=True)
data = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', "import * as m from './src/data/manualMentoras.js'; console.log(JSON.stringify(m))"], cwd=ROOT))
for name, file in [('Chanak', 'DejaVuSans.ttf'), ('ChanakBold', 'DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, '/usr/share/fonts/truetype/dejavu/' + file))
pdfmetrics.registerFontFamily('Chanak', normal='Chanak', bold='ChanakBold')
NAVY = colors.HexColor('#133854')
TEAL = colors.HexColor('#187d7b')
GOLD = colors.HexColor('#b49a55')
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Copy', fontName='Chanak', fontSize=10.5, leading=16, spaceAfter=9, textColor=NAVY, alignment=TA_LEFT))
styles.add(ParagraphStyle(name='Step', parent=styles['Copy'], leftIndent=13, firstLineIndent=-13, spaceAfter=7))
styles.add(ParagraphStyle(name='H', parent=styles['Copy'], fontName='ChanakBold', fontSize=21, leading=27, spaceBefore=9, spaceAfter=15))
styles.add(ParagraphStyle(name='Sub', parent=styles['Copy'], fontName='ChanakBold', fontSize=13, leading=18, spaceBefore=13, spaceAfter=8, keepWithNext=True))
styles.add(ParagraphStyle(name='Label', parent=styles['Copy'], fontName='ChanakBold', fontSize=9, leading=13, textColor=TEAL, spaceAfter=8))
styles.add(ParagraphStyle(name='SmallCopy', parent=styles['Copy'], fontSize=8.5, leading=13))
styles.add(ParagraphStyle(name='ScopeCopy', parent=styles['Copy'], fontSize=10, leading=14, spaceAfter=4))
story = []
md = ['# Manual operativo de mentoras Chanak', '\nVersión 2026-10-23. Complemento de la formación; conserva la ruta y vídeos existentes.\n']

def clean(text):
    return str(text).replace('–', '-').replace('—', '-').replace('\u2011', '-').replace('→', ' > ')

def p(text, style='Copy'):
    return Paragraph(escape(clean(text)), styles[style])

def block(title, text):
    story.append(p(title, 'Sub'))
    story.append(p(text))

def page(canvas, doc):
    w, h = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, h - 12, w, 12, fill=1, stroke=0)
    canvas.setStrokeColor(GOLD)
    canvas.line(46, 43, w - 46, 43)
    canvas.setFont('Chanak', 8)
    canvas.setFillColor(NAVY)
    canvas.drawString(46, 28, 'CHANAK / FORMACIÓN DEL EQUIPO / 23.10.2026')
    canvas.drawRightString(w - 46, 28, str(doc.page))

logo = ROOT / 'public/logo-chanak.png'
if logo.exists():
    story.append(Image(str(logo), width=82, height=82, hAlign='LEFT'))
story.extend([Spacer(1, 28), p('FORMACIÓN DEL EQUIPO CHANAK', 'Label'), p('Manual operativo\nde mentoras', 'H'), p('Mentora general · Profesora de Inglés · Life Skills', 'Sub'), Spacer(1, 18), p('Del diagnóstico al plan. De la evidencia a la nota. Del acompañamiento al siguiente paso.'), Spacer(1, 22)])
block('Qué encontrarás', 'Cinco unidades de lectura, rutinas por especialidad, casos prácticos y una evaluación de 15 decisiones. El manual conecta los contenidos formativos con los nombres y flujos localizados en el código del ecosistema.')
block('Alcance de esta edición', 'Revisión de repositorios al 23 de octubre de 2026. No certifica despliegue, migraciones, permisos de cuentas reales ni acreditación institucional. Portal, Flex y Life Skills tienen cambios en curso. Las diferencias detectadas se señalan para evitar enseñar automatizaciones o permisos no verificados.')
story.append(PageBreak())
story.append(p('Cómo utilizar este manual', 'H'))
for i, text in enumerate(['En training abre Inicio > Mi trabajo > tu función. Administración y Coordinación tienen también acceso de consulta al manual de cada especialidad.', 'Lee las cinco unidades. Resuelve el caso de cada una y pulsa Confirmar lectura y caso resuelto para guardar el avance.', 'Desarrolla la práctica con datos ficticios y preséntala en el entregable del módulo correspondiente de tu ruta.', 'Después de las cinco lecturas, entrega la evaluación de 15 preguntas. El 85% exige 13 respuestas correctas de 15. Puedes repasar y repetir.', 'Administración consulta lecturas, casos y evaluación como complemento separado. Este registro no modifica el avance anterior ni las horas.', 'La certificación oficial conserva su protocolo de práctica, validación y firma institucional; no nace automáticamente de este cuestionario.'], 1):
    story.append(p(f'{i}. {text}', 'Step'))
block('Glosario de trabajo', 'SIS: sistema de información del estudiante y expediente escolar. Core: núcleo académico. Scope & Sequence: alcance y secuencia curricular. PEI: Plan Educativo Individualizado. Mastery Learning: aprendizaje para el dominio. LMS: plataforma de cursos y actividades. Feedback: devolución que indica qué está logrado y cuál es el siguiente paso. Evidencia: archivo o registro verificable del trabajo. Crédito: reconocimiento académico sujeto a reglas y validación, no un contador de actividades.')
block('Los sistemas y las cuentas', 'Training forma al equipo; SIS conserva el expediente; Portal orienta y aporta recursos; Dual Diploma LMS gestiona su aprendizaje y revisión en otra base. No compartir cuentas. Si un acceso falla, solicitar revisión de la asignación. No introducir datos directamente en Supabase para corregir una pantalla.')
story.append(PageBreak())
story.append(p('Tres funciones diferentes', 'H'))
story.append(p('Mentor general, Profesor de Inglés y Profesor / mentor de Life Skills no son un único puesto. Una persona puede ejercer varias funciones si las tiene asignadas; ser mentor general no le concede automáticamente las otras especialidades ni viceversa.'))
for alcance in data['ALCANCE_PERFILES']:
    alcance_story = [p(alcance['nombre'], 'Sub'), p(alcance['acompana'], 'ScopeCopy')]
    for label, key in [('Notas y evaluación', 'notas'), ('Motivación con coins', 'coins'), ('Alertas y comunicación', 'alertas'), ('Límite', 'limite')]:
        alcance_story.append(p(label + ': ' + alcance[key], 'ScopeCopy'))
    story.append(KeepTogether(alcance_story))
story.append(p('Ejemplo: un alumno puede tener tres personas distintas. Los especialistas enseñan y evalúan su área; el mentor general acompaña el conjunto con la familia; Coordinación supervisa y valida las decisiones de su competencia.'))
md.extend(['\n## Tres funciones diferentes', 'No son un único puesto. Las asignaciones múltiples deben ser explícitas.'])
for alcance in data['ALCANCE_PERFILES']:
    md.append('\n### ' + alcance['nombre'])
    for key in ['acompana', 'notas', 'coins', 'alertas', 'limite']:
        md.append(alcance[key])
for perfil in data['PERFILES_OPERATIVOS']:
    story.append(PageBreak())
    story.append(p('RUTINA DE MI ESPECIALIDAD', 'Label'))
    story.append(p(perfil['titulo'], 'H'))
    story.append(p(perfil['resultado']))
    md.extend(['\n## ' + perfil['titulo'], perfil['resultado']])
    for i, text in enumerate(perfil['pasos'], 1):
        story.append(p(f'{i}. {text}', 'Step'))
        md.append(f'{i}. {text}')
    block('Límites de la función', perfil['limites'])
    md.append('\nLímites: ' + perfil['limites'])
for proc in data['PROCEDIMIENTOS_MENTORAS']:
    story.append(PageBreak())
    story.append(p('PROCEDIMIENTO PASO A PASO', 'Label'))
    story.append(p(proc['titulo'], 'H'))
    story.append(p('Dónde: ' + proc['donde']))
    md.extend(['\n## ' + proc['titulo'], 'Dónde: ' + proc['donde']])
    for alcance in data['ALCANCE_PERFILES']:
        story.append(p(alcance['nombre'] + ': ' + proc['alcance'][alcance['id']], 'SmallCopy'))
    for i, paso in enumerate(proc['pasos'], 1):
        story.append(p(f'{i}. {paso}', 'Step'))
        md.append(f'{i}. {paso}')
    if proc['id'] == 'coins':
        story.append(p('Méritos del formulario SIS revisado', 'Sub'))
        story.append(p('Comprobar el catálogo vigente y el permiso antes de otorgar. Un examen debe estar superado; no premiar dos veces el mismo hecho.', 'SmallCopy'))
        filas = [[p('Acción comprobada', 'SmallCopy'), p('Coins', 'SmallCopy')]]
        filas += [[p(accion, 'SmallCopy'), p('+' + str(coins), 'SmallCopy')] for accion, coins in data['MERITOS_COINS']]
        tabla = Table(filas, colWidths=[410, 90], repeatRows=1)
        tabla.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#e4f0ef')), ('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LINEBELOW', (0, 0), (-1, -1), 0.4, colors.HexColor('#d4dfe3')), ('LEFTPADDING', (0, 0), (-1, -1), 8), ('TOPPADDING', (0, 0), (-1, -1), 7)]))
        story.append(tabla)
    story.append(p('Ejemplos por función', 'Sub'))
    for texto in proc['ejemplos']:
        story.append(p(texto))
        md.append(texto)
    block('Comprueba al terminar', proc['verificar'])
    block('Permisos y límites', proc['limites'])
    md.extend([proc['verificar'], proc['limites']])
for unidad in data['UNIDADES_MENTORAS']:
    story.append(PageBreak())
    story.append(p('UNIDAD ' + unidad['id'][1:] + ' / 5', 'Label'))
    story.append(p(unidad['titulo'], 'H'))
    story.append(p('Al terminar: ' + unidad['objetivo']))
    md.extend(['\n## ' + unidad['id'] + ' · ' + unidad['titulo'], '\nObjetivo: ' + unidad['objetivo']])
    for s in unidad['secciones']:
        block(s['titulo'], s['texto'])
        md.extend(['\n### ' + s['titulo'], s['texto']])
        for i, text in enumerate(s['pasos'], 1):
            story.append(p(f'{i}. {text}', 'Step'))
            md.append(f'{i}. {text}')
    c = unidad['caso']
    caso_story = [p('Practica una decisión', 'Sub'), p(c['pregunta'])]
    md.extend(['\n### Caso práctico', c['pregunta']])
    for i, text in enumerate(c['opciones']):
        caso_story.append(p(f'{chr(65+i)}. {text}', 'Step'))
        md.append(f'{chr(65+i)}. {text}')
    caso_story.extend([p('Decisión razonada', 'Sub'), p(c['explicacion']), p('Práctica para tu portafolio', 'Sub'), p(unidad['evidencia']), p('Módulos relacionados: ' + ', '.join(unidad['mapa']), 'SmallCopy')])
    story.append(KeepTogether(caso_story))
    md.extend(['\nDecisión razonada: ' + c['explicacion'], '\nPráctica: ' + unidad['evidencia'], '\nMódulos: ' + ', '.join(unidad['mapa'])])
story.append(PageBreak())
story.append(p('Plantillas para actuar', 'H'))
templates = [
 ('Bienvenida a la familia', 'Programa y vía curricular: ____. Alumno y responsables: ____. Objetivo inicial: ____. Material y acceso: ____. Primera entrega y lugar: ____. Quién revisa: ____. Próximo contacto: ____. Dificultades de acceso detectadas: ____.'),
 ('Seguimiento sin acusaciones', 'Actividad/periodo pendiente: ____. Fecha del último envío verificado: ____. Estado real: trabajo / envío / revisión / importación. Pregunta a la familia: ____. Apoyo acordado: ____. Responsable y fecha de revisión: ____. Escalamiento si procede: ____.'),
 ('Informe trimestral', 'Alumno y periodo: ____. Objetivos del PEI: ____. Materias/resultados y estado de aprobación: ____. Evidencias de referencia: ____. Logro: ____. Brecha: ____. Apoyos aplicados: ____. Pendientes y próximo paso: ____. Revisión de Coordinación y validación/firma autorizada: ____.'),
 ('Paso de restauración', 'Hecho observable sin etiquetas: ____. Escucha del estudiante: ____. Reparación segura, concreta y proporcionada: ____. Evidencia y fecha acordadas: ____. Criterio para validar: ____. Responsable autorizado: ____.'),
]
for title, text in templates:
    block(title, text)
    md.extend(['\n### ' + title, text])
story.append(PageBreak())
story.append(p('Evaluación de aplicación', 'H'))
story.append(p('Quince situaciones. Responde en training para guardar tu resultado. Necesitas 13/15 para superar el umbral del 85%. Esta copia es una guía de estudio; no contiene una firma o certificado oficial.'))
md.append('\n## Evaluación final · 15 preguntas situacionales · mínimo 13/15')
for n, q in enumerate(data['EVALUACION_MENTORAS'], 1):
    group = [p(f'{n}. {q["pregunta"]}', 'Sub')]
    for i, option in enumerate(q['opciones']):
        group.append(p(f'{chr(65+i)}. {option}', 'Step'))
    story.append(KeepTogether(group))
    md.append('\n' + str(n) + '. ' + q['pregunta'])
    md.extend([f'{chr(65+i)}. {v}' for i, v in enumerate(q['opciones'])])
story.append(PageBreak())
story.append(p('Fuentes y mantenimiento', 'H'))
story.append(p('Esta edición sigue versiones concretas de código. Si cambia una pantalla, el manual se actualiza desde su fuente común antes de sustituir el PDF y grabar el recorrido. Las URL de repositorios privados requieren los permisos correspondientes.'))
md.append('\n## Fuentes')
for f in data['FUENTES_MANUAL']:
    story.append(p(f['nombre'], 'Sub'))
    story.append(p(f['detalle'], 'SmallCopy'))
    url = escape(f['url'], quote=True)
    story.append(Paragraph(f'<link href="{url}" color="#187d7b">Abrir fuente de referencia</link>', styles['SmallCopy']))
    md.append(f'- [{f["nombre"]}]({f["url"]}): {f["detalle"]}')
pdf = OUT / 'Manual_Operativo_Mentoras_Chanak_2026-10.pdf'
SimpleDocTemplate(str(pdf), pagesize=A4, leftMargin=46, rightMargin=46, topMargin=43, bottomMargin=57, title='Manual operativo de mentoras Chanak', author='Chanak International Academy').build(story, onFirstPage=page, onLaterPages=page)
(OUT / 'Manual_Operativo_Mentoras_Chanak_2026-10.md').write_text('\n\n'.join(md), encoding='utf-8')
target = ROOT / 'public/manuales/manual-mentoras-2026-10.pdf'
target.parent.mkdir(exist_ok=True)
shutil.copyfile(pdf, target)
print(pdf)
