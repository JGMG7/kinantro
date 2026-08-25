(() => {
  'use strict';

  const STORAGE_KEY = 'antropometria_sujetos_v1';
  const LANG_KEY = 'antropometria_lang';

  /* ---------- i18n ---------- */

  const LANG_NAMES = { es: 'Español', en: 'English' };

  const I18N = {
    es: {
      'app.title': 'Antropometría',
      'app.subtitle': 'Composición corporal y somatotipo (Heath‑Carter)',
      'app.install': 'Instalar app',
      'guide.summary': 'Guía de medición',
      'guide.intro': 'Referencia rápida de los puntos anatómicos y la técnica de cada medida, según el protocolo ISAK. Todas las medidas se toman del lado derecho del cuerpo, con el sujeto de pie y relajado; se recomienda tomar cada medida por duplicado o triplicado y usar la mediana.',
      'guide.disclaimer': 'Esta guía es un resumen orientativo y no reemplaza la formación y certificación ISAK para la toma de medidas antropométricas.',
      'guide.desc.muneca': 'Biestiloideo: distancia entre las apófisis estiloides del radio y el cúbito, con la muñeca flexionada 90°.',
      'guide.desc.humero': 'Biepicondíleo: distancia entre el epicóndilo lateral y la epitróclea del húmero, con el codo flexionado 90°.',
      'guide.desc.femur': 'Biepicondíleo: distancia entre el epicóndilo lateral y medial del fémur, con la rodilla flexionada 90°.',
      'guide.desc.brCont': 'En el mismo punto medio, con el brazo flexionado y el bíceps contraído al máximo.',
      'guide.desc.cintura': 'En el punto de menor circunferencia del tronco, entre el último arco costal y la cresta ilíaca.',
      'guide.desc.cadera': 'En la máxima protuberancia posterior de los glúteos.',
      'guide.desc.pantMed': 'En el perímetro máximo de la pantorrilla.',
      'guide.desc.trc': 'Pliegue vertical en la cara posterior del brazo, en el punto medio acromio-radial.',
      'guide.desc.ssc': 'Pliegue oblicuo (45°), 2 cm por debajo del ángulo inferior de la escápula.',
      'guide.desc.ssp': 'Pliegue oblicuo, en la intersección de la línea de la cresta ilíaca con la línea axilar anterior.',
      'guide.desc.abd': 'Pliegue vertical, 5 cm a la derecha del ombligo.',
      'guide.desc.mmed': 'Pliegue vertical en la línea media del muslo, en el punto medio entre el pliegue inguinal y el borde proximal de la rótula.',
      'guide.desc.pant': 'Pliegue vertical en la cara medial de la pantorrilla, en su perímetro máximo.',
      'legend.basicos': 'Básicos',
      'legend.diametros': 'Diámetros (cm)',
      'legend.perimetros': 'Perímetros (cm)',
      'legend.pliegues': 'Pliegues (mm)',
      'field.nombre': 'Apellido y nombre',
      'field.sexo': 'Sexo',
      'field.sexoF': 'Femenino',
      'field.sexoM': 'Masculino',
      'field.nacimiento': 'Fecha de nacimiento',
      'field.fecha': 'Fecha de evaluación',
      'field.peso': 'Peso (kg)',
      'field.talla': 'Talla (cm)',
      'field.muneca': 'Muñeca',
      'field.humero': 'Húmero',
      'field.femur': 'Fémur',
      'field.brCont': 'Br. contraído',
      'field.cintura': 'Cintura',
      'field.cadera': 'Cadera',
      'field.pantMed': 'Pantorrilla medial',
      'field.trc': 'TRC (tríceps)',
      'field.ssc': 'SSC (subescapular)',
      'field.ssp': 'SSP (supraespinal)',
      'field.abd': 'ABD (abdominal)',
      'field.mmed': 'MMED (muslo anterior)',
      'field.pant': 'PANT (pantorrilla)',
      'form.title': 'Nuevo registro',
      'form.save': 'Calcular y guardar',
      'form.update': 'Actualizar sujeto',
      'form.clear': 'Limpiar formulario',
      'results.title': 'Resultado',
      'result.edad': 'Edad',
      'result.imc': 'IMC',
      'result.s6pl': 'Suma 6 pliegues',
      'result.pctGrasa': '% Grasa',
      'result.pesoGraso': 'Peso graso',
      'result.pesoOseo': 'Peso óseo',
      'result.pctOseo': '% Óseo',
      'result.pesoMuscular': 'Peso muscular',
      'result.pctMuscular': '% Muscular',
      'result.pesoResidual': 'Peso residual',
      'result.pctResidual': '% Residual',
      'result.icc': 'Índice cintura/cadera',
      'result.endo': 'Endomorfia',
      'result.meso': 'Mesomorfia',
      'result.ecto': 'Ectomorfia',
      'result.coords': 'Coordenadas (X, Y)',
      'chart.title': 'Somatocarta',
      'chart.legendF': 'Femenino',
      'chart.legendM': 'Masculino',
      'chart.legendAvg': '✕ Promedio',
      'chart.vertexMeso': 'Mesomorfia',
      'chart.vertexEndo': 'Endomorfia',
      'chart.vertexEcto': 'Ectomorfia',
      'chart.xLabel': 'X — Ectomorfia − Endomorfia',
      'chart.yLabel': 'Y — 2×Mesomorfia − (Endo+Ecto)',
      'chart.avgFemale': 'Promedio femenino',
      'chart.avgMale': 'Promedio masculino',
      'common.emptyHint': 'Todavía no hay sujetos guardados.',
      'subjects.title': 'Sujetos guardados',
      'subjects.printGroup': 'Imprimir informe grupal',
      'subjects.export': 'Exportar CSV',
      'subjects.import': 'Importar CSV',
      'subjects.clearAll': 'Borrar todos',
      'import.errorParse': 'No se pudo leer el archivo CSV: {msg}',
      'import.errorEmpty': 'El archivo no tiene filas de datos.',
      'import.errorNoRequiredCols': 'Faltan columnas obligatorias en el CSV: {cols}',
      'import.rowError': 'Fila {row}: {msg}',
      'import.errMissingName': 'falta nombre (columna "nombre" o "id")',
      'import.errMissingSex': 'falta sexo o el valor no es F/M',
      'import.errMissingField': 'falta o no es un número válido: {field}',
      'import.errDates': 'no se pudo determinar la fecha de nacimiento/evaluación',
      'import.confirmSummary': 'Se importarán {ok} sujetos de {total} filas.\n\n{errCount} filas con error:\n{errList}\n\n¿Continuar con la importación de los {ok} sujetos válidos?',
      'import.toastDone': 'Se importaron {ok} sujetos ({errCount} con error, ver detalle)',
      'import.toastDoneClean': 'Se importaron {ok} sujetos',
      'import.toastNone': 'No se pudo importar ningún sujeto — revisá los errores',
      'subjects.colName': 'Nombre',
      'subjects.colSex': 'Sexo',
      'subjects.colAge': 'Edad',
      'subjects.colImc': 'IMC',
      'subjects.colIcc': 'ICC',
      'subjects.colFat': '% Grasa',
      'subjects.colEndo': 'Endo',
      'subjects.colMeso': 'Meso',
      'subjects.colEcto': 'Ecto',
      'subjects.actionPrint': 'Imprimir / PDF',
      'subjects.actionEdit': 'Editar',
      'subjects.actionDelete': 'Eliminar',
      'subjects.confirmDelete': '¿Eliminar a "{name}"?',
      'subjects.confirmClearAll': '¿Borrar todos los sujetos guardados? Esta acción no se puede deshacer.',
      'subjects.toastSaved': 'Sujeto guardado',
      'subjects.toastUpdated': 'Sujeto actualizado',
      'subjects.toastDeleted': 'Sujeto eliminado',
      'subjects.toastClearedAll': 'Se borraron todos los sujetos',
      'subjects.toastNoExport': 'No hay sujetos para exportar',
      'subjects.toastNoPrint': 'No hay sujetos para imprimir',
      'stats.title': 'Estadísticos del grupo',
      'stats.mean': 'Promedio',
      'stats.sd': 'Desv. estándar',
      'stats.median': 'Mediana',
      'stats.max': 'Máximo',
      'stats.min': 'Mínimo',
      'about.title': 'Métodos y bibliografía',
      'about.faulknerNote': 'Nota: la fórmula atribuida a Faulkner (1968) es señalada por parte de la literatura como originalmente derivada por Yuhasz — ver Simões Pires Neto, C. & Glaner, M.F. (2007). "Equação de Faulkner" para predizer a gordura corporal: o fim de um mito. Revista Brasileira de Cineantropometria e Desempenho Humano, 9(2).',
      'credits.title': 'Autoría',
      'credits.license': 'Software libre bajo licencia GPL-3.0.',
      'print.title': 'Informe individual — ',
      'print.sex': 'Sexo',
      'print.birth': 'Nacimiento',
      'print.eval': 'Evaluación',
      'print.generated': 'Generado',
      'print.sectionData': 'Datos ingresados',
      'print.sectionResults': 'Resultados',
      'print.footer': 'Antropometría — Composición corporal y somatotipo (Heath-Carter). Grupo de Investigación Biofísica y Bioquímica del Ejercicio, ISEF‑CURE.',
      'unit.years': 'a',
    },
    en: {
      'app.title': 'Anthropometry',
      'app.subtitle': 'Body composition and somatotype (Heath‑Carter)',
      'app.install': 'Install app',
      'guide.summary': 'Measurement guide',
      'guide.intro': 'Quick reference for the anatomical landmarks and technique of each measurement, per the ISAK protocol. All measurements are taken on the right side of the body, with the subject standing relaxed; take each measurement in duplicate or triplicate and use the median.',
      'guide.disclaimer': 'This guide is a quick reference and does not replace ISAK training and certification for anthropometric measurement.',
      'guide.desc.muneca': 'Biestyloid: distance between the styloid processes of the radius and ulna, wrist flexed 90°.',
      'guide.desc.humero': 'Biepicondylar: distance between the lateral epicondyle and the medial epicondyle (trochlea) of the humerus, elbow flexed 90°.',
      'guide.desc.femur': 'Biepicondylar: distance between the lateral and medial epicondyles of the femur, knee flexed 90°.',
      'guide.desc.brCont': 'At the same mid point, arm flexed with the biceps maximally contracted.',
      'guide.desc.cintura': 'At the point of minimum torso girth, between the lowest rib and the iliac crest.',
      'guide.desc.cadera': 'At the maximum posterior protrusion of the buttocks.',
      'guide.desc.pantMed': 'At the maximum calf girth.',
      'guide.desc.trc': 'Vertical fold on the posterior midline of the arm, at the mid-acromiale-radiale point.',
      'guide.desc.ssc': 'Oblique fold (45°), 2 cm below the inferior angle of the scapula.',
      'guide.desc.ssp': 'Oblique fold at the intersection of the iliac crest line and the anterior axillary line.',
      'guide.desc.abd': 'Vertical fold, 5 cm to the right of the umbilicus.',
      'guide.desc.mmed': 'Vertical fold on the midline of the thigh, midway between the inguinal fold and the proximal border of the patella.',
      'guide.desc.pant': 'Vertical fold on the medial aspect of the calf, at its maximum girth.',
      'legend.basicos': 'Basics',
      'legend.diametros': 'Diameters (cm)',
      'legend.perimetros': 'Girths (cm)',
      'legend.pliegues': 'Skinfolds (mm)',
      'field.nombre': 'Last name, first name',
      'field.sexo': 'Sex',
      'field.sexoF': 'Female',
      'field.sexoM': 'Male',
      'field.nacimiento': 'Date of birth',
      'field.fecha': 'Assessment date',
      'field.peso': 'Weight (kg)',
      'field.talla': 'Height (cm)',
      'field.muneca': 'Wrist',
      'field.humero': 'Humerus',
      'field.femur': 'Femur',
      'field.brCont': 'Arm flexed',
      'field.cintura': 'Waist',
      'field.cadera': 'Hip',
      'field.pantMed': 'Medial calf',
      'field.trc': 'TRC (triceps)',
      'field.ssc': 'SSC (subscapular)',
      'field.ssp': 'SSP (supraspinale)',
      'field.abd': 'ABD (abdominal)',
      'field.mmed': 'MMED (front thigh)',
      'field.pant': 'PANT (calf)',
      'form.title': 'New record',
      'form.save': 'Calculate and save',
      'form.update': 'Update subject',
      'form.clear': 'Clear form',
      'results.title': 'Result',
      'result.edad': 'Age',
      'result.imc': 'BMI',
      'result.s6pl': 'Sum of 6 skinfolds',
      'result.pctGrasa': '% Fat',
      'result.pesoGraso': 'Fat mass',
      'result.pesoOseo': 'Bone mass',
      'result.pctOseo': '% Bone',
      'result.pesoMuscular': 'Muscle mass',
      'result.pctMuscular': '% Muscle',
      'result.pesoResidual': 'Residual mass',
      'result.pctResidual': '% Residual',
      'result.icc': 'Waist/hip ratio',
      'result.endo': 'Endomorphy',
      'result.meso': 'Mesomorphy',
      'result.ecto': 'Ectomorphy',
      'result.coords': 'Coordinates (X, Y)',
      'chart.title': 'Somatochart',
      'chart.legendF': 'Female',
      'chart.legendM': 'Male',
      'chart.legendAvg': '✕ Average',
      'chart.vertexMeso': 'Mesomorphy',
      'chart.vertexEndo': 'Endomorphy',
      'chart.vertexEcto': 'Ectomorphy',
      'chart.xLabel': 'X — Ectomorphy − Endomorphy',
      'chart.yLabel': 'Y — 2×Mesomorphy − (Endo+Ecto)',
      'chart.avgFemale': 'Female average',
      'chart.avgMale': 'Male average',
      'common.emptyHint': 'No subjects saved yet.',
      'subjects.title': 'Saved subjects',
      'subjects.printGroup': 'Print group report',
      'subjects.export': 'Export CSV',
      'subjects.import': 'Import CSV',
      'subjects.clearAll': 'Delete all',
      'import.errorParse': 'Could not read the CSV file: {msg}',
      'import.errorEmpty': 'The file has no data rows.',
      'import.errorNoRequiredCols': 'Missing required columns in the CSV: {cols}',
      'import.rowError': 'Row {row}: {msg}',
      'import.errMissingName': 'missing name (column "nombre" or "id")',
      'import.errMissingSex': 'missing sex or value is not F/M',
      'import.errMissingField': 'missing or not a valid number: {field}',
      'import.errDates': 'could not determine date of birth / assessment date',
      'import.confirmSummary': '{ok} of {total} rows will be imported.\n\n{errCount} rows with errors:\n{errList}\n\nContinue importing the {ok} valid subjects?',
      'import.toastDone': 'Imported {ok} subjects ({errCount} with errors, see details)',
      'import.toastDoneClean': 'Imported {ok} subjects',
      'import.toastNone': 'Could not import any subject — check the errors',
      'subjects.colName': 'Name',
      'subjects.colSex': 'Sex',
      'subjects.colAge': 'Age',
      'subjects.colImc': 'BMI',
      'subjects.colIcc': 'WHR',
      'subjects.colFat': '% Fat',
      'subjects.colEndo': 'Endo',
      'subjects.colMeso': 'Meso',
      'subjects.colEcto': 'Ecto',
      'subjects.actionPrint': 'Print / PDF',
      'subjects.actionEdit': 'Edit',
      'subjects.actionDelete': 'Delete',
      'subjects.confirmDelete': 'Delete "{name}"?',
      'subjects.confirmClearAll': 'Delete all saved subjects? This action cannot be undone.',
      'subjects.toastSaved': 'Subject saved',
      'subjects.toastUpdated': 'Subject updated',
      'subjects.toastDeleted': 'Subject deleted',
      'subjects.toastClearedAll': 'All subjects were deleted',
      'subjects.toastNoExport': 'No subjects to export',
      'subjects.toastNoPrint': 'No subjects to print',
      'stats.title': 'Group statistics',
      'stats.mean': 'Mean',
      'stats.sd': 'SD',
      'stats.median': 'Median',
      'stats.max': 'Max',
      'stats.min': 'Min',
      'about.title': 'Methods and references',
      'about.faulknerNote': 'Note: the formula attributed to Faulkner (1968) is identified by part of the literature as originally derived by Yuhasz — see Simões Pires Neto, C. & Glaner, M.F. (2007). "Equação de Faulkner" para predizer a gordura corporal: o fim de um mito. Revista Brasileira de Cineantropometria e Desempenho Humano, 9(2).',
      'credits.title': 'Authorship',
      'credits.license': 'Free software under the GPL-3.0 license.',
      'print.title': 'Individual report — ',
      'print.sex': 'Sex',
      'print.birth': 'Date of birth',
      'print.eval': 'Assessment',
      'print.generated': 'Generated',
      'print.sectionData': 'Entered data',
      'print.sectionResults': 'Results',
      'print.footer': 'Anthropometry — Body composition and somatotype (Heath-Carter). Exercise Biophysics and Biochemistry Research Group, ISEF‑CURE.',
      'unit.years': 'yr',
    },
  };

  let lang = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es';

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
  }

  function tf(key, vars) {
    let s = t(key);
    for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
    return s;
  }

  function applyStaticI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(elm => {
      elm.textContent = t(elm.dataset.i18n);
    });
    const toggle = document.getElementById('langToggleBtn');
    if (toggle) toggle.textContent = LANG_NAMES[lang === 'es' ? 'en' : 'es'];
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem(LANG_KEY, l);
    applyStaticI18n();
    saveBtn.textContent = editingId ? t('form.update') : t('form.save');
    if (lastComputed && !resultsCard.hidden) showResults(lastComputed.s, lastComputed.r);
    renderSubjects();
    renderStats();
    renderChart();
  }

  /* ---------- storage ---------- */

  function loadSubjects() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('No se pudo leer el almacenamiento local', e);
      return [];
    }
  }

  function saveSubjects(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  let subjects = loadSubjects();
  let editingId = null;
  let lastComputed = null;

  /* ---------- calculations ---------- */

  function calcEdad(nacimiento, fecha) {
    const nac = new Date(nacimiento);
    const ev = new Date(fecha);
    const days = (ev - nac) / (1000 * 60 * 60 * 24);
    return days / 365;
  }

  function computeAll(s) {
    const edad = calcEdad(s.nacimiento, s.fecha);
    const imc = s.peso / ((s.talla / 100) ** 2);
    const s6pl = s.trc + s.ssc + s.ssp + s.abd + s.mmed + s.pant;
    const s3plCorr = (s.trc + s.ssc + s.ssp) * 170.18 / s.talla;
    const hwr = s.talla / Math.pow(s.peso, 0.3333);

    const pctGrasa = s.sexo === 'F'
      ? 7.9 + 0.213 * (s.trc + s.ssc + s.ssp + s.abd)
      : 5.783 + 0.153 * (s.trc + s.ssc + s.ssp + s.abd);

    const pesoGraso = s.peso * pctGrasa / 100;
    // Von Döbeln, modificada por Rocha (1974): usa talla² (no húmero), muñeca y fémur.
    const pesoOseo = 3.02 * Math.pow(
      (s.talla / 100) ** 2 * (s.muneca / 100) * (s.femur / 100) * 400,
      0.712
    );
    // Würch: 24.1% en hombres, 20.9% en mujeres (De Rose & Guimarães, 1980).
    const pesoResidual = s.peso * (s.sexo === 'M' ? 0.241 : 0.209);
    const pesoMuscular = s.peso - (pesoGraso + pesoOseo + pesoResidual);

    const pctOseo = pesoOseo / s.peso * 100;
    const pctMuscular = pesoMuscular / s.peso * 100;
    const pctResidual = pesoResidual / s.peso * 100;
    const icc = s.cintura / s.cadera;

    const endo = -0.7182 + 0.1451 * s3plCorr - 0.00068 * s3plCorr ** 2 + 0.0000014 * s3plCorr ** 3;
    const meso = 0.858 * s.humero + 0.601 * s.femur
      + 0.188 * (s.brCont - (s.trc / 10))
      + 0.161 * (s.pantMed - (s.pant / 10))
      - (s.talla * 0.131) + 4.5;
    const ecto = hwr >= 40.75 ? 0.732 * hwr - 28.58
      : hwr > 38.25 ? 0.463 * hwr - 17.63
      : 0.1;

    const x = ecto - endo;
    const y = 2 * meso - (endo + ecto);

    return { edad, imc, s6pl, s3plCorr, hwr, pctGrasa, pesoGraso, pesoOseo, pesoResidual, pesoMuscular,
      pctOseo, pctMuscular, pctResidual, icc, endo, meso, ecto, x, y };
  }

  /* ---------- formatting ---------- */

  const fmt = (n, d = 1) => Number.isFinite(n) ? n.toFixed(d) : '—';

  /* ---------- form ---------- */

  const form = document.getElementById('subjectForm');
  const saveBtn = document.getElementById('saveBtn');
  const clearBtn = document.getElementById('clearBtn');
  const resultsCard = document.getElementById('resultsCard');
  const resultsGrid = document.getElementById('resultsGrid');

  const NUMERIC_FIELDS = ['peso', 'talla', 'muneca', 'humero', 'femur', 'brCont',
    'cintura', 'cadera', 'pantMed', 'trc', 'ssc', 'ssp', 'abd', 'mmed', 'pant'];

  function readForm() {
    const fd = new FormData(form);
    const raw = { nombre: fd.get('nombre').trim(), sexo: fd.get('sexo'), nacimiento: fd.get('nacimiento'), fecha: fd.get('fecha') };
    for (const f of NUMERIC_FIELDS) raw[f] = parseFloat(fd.get(f));
    return raw;
  }

  function fillForm(s) {
    for (const [k, v] of Object.entries(s)) {
      const el = form.elements[k];
      if (el) el.value = v;
    }
  }

  function resetForm(hideResults = true) {
    form.reset();
    const today = new Date().toISOString().slice(0, 10);
    form.elements['fecha'].value = today;
    editingId = null;
    saveBtn.textContent = t('form.save');
    if (hideResults) resultsCard.hidden = true;
  }

  function showResults(s, r) {
    lastComputed = { s, r };
    resultsCard.hidden = false;
    const tiles = [
      [t('result.edad'), `${fmt(r.edad, 1)} ${t('unit.years')}`],
      [t('result.imc'), fmt(r.imc)],
      [t('result.s6pl'), fmt(r.s6pl) + ' mm'],
      [t('result.pctGrasa'), fmt(r.pctGrasa) + ' %'],
      [t('result.pesoGraso'), `${fmt(r.pesoGraso)} kg`],
      [t('result.pesoOseo'), `${fmt(r.pesoOseo)} kg (${fmt(r.pctOseo)} %)`],
      [t('result.pesoMuscular'), `${fmt(r.pesoMuscular)} kg (${fmt(r.pctMuscular)} %)`],
      [t('result.pesoResidual'), `${fmt(r.pesoResidual)} kg (${fmt(r.pctResidual)} %)`],
      [t('result.icc'), fmt(r.icc, 2)],
      [t('result.endo'), fmt(r.endo, 2)],
      [t('result.meso'), fmt(r.meso, 2)],
      [t('result.ecto'), fmt(r.ecto, 2)],
      [t('result.coords'), `${fmt(r.x, 2)}, ${fmt(r.y, 2)}`],
    ];
    resultsGrid.innerHTML = tiles.map(([label, value]) => `
      <div class="result-tile">
        <div class="result-tile__label">${label}</div>
        <div class="result-tile__value">${value}</div>
      </div>`).join('');
    resultsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const raw = readForm();
    const r = computeAll(raw);

    if (editingId) {
      const idx = subjects.findIndex(s => s.id === editingId);
      if (idx !== -1) subjects[idx] = { ...subjects[idx], ...raw };
    } else {
      subjects.push({ id: crypto.randomUUID(), ...raw, createdAt: Date.now() });
    }
    saveSubjects(subjects);
    showResults(raw, r);
    renderSubjects();
    renderStats();
    renderChart();
    toast(editingId ? t('subjects.toastUpdated') : t('subjects.toastSaved'));
    resetForm(false);
  });

  clearBtn.addEventListener('click', resetForm);

  /* ---------- subjects table ---------- */

  const subjectsBody = document.getElementById('subjectsBody');
  const subjectsEmptyHint = document.getElementById('subjectsEmptyHint');
  const subjectsTable = document.getElementById('subjectsTable');

  function renderSubjects() {
    const has = subjects.length > 0;
    subjectsTable.hidden = !has;
    subjectsEmptyHint.hidden = has;
    subjectsBody.innerHTML = subjects.map(s => {
      const r = computeAll(s);
      return `<tr data-id="${s.id}">
        <td>${escapeHtml(s.nombre)}</td>
        <td>${s.sexo}</td>
        <td>${fmt(r.edad, 1)}</td>
        <td>${fmt(r.imc)}</td>
        <td>${fmt(r.icc, 2)}</td>
        <td>${fmt(r.pctGrasa)}</td>
        <td>${fmt(r.endo, 2)}</td>
        <td>${fmt(r.meso, 2)}</td>
        <td>${fmt(r.ecto, 2)}</td>
        <td class="no-print">
          <button class="btn--icon" data-action="print" title="${t('subjects.actionPrint')}">🖨️</button>
          <button class="btn--icon" data-action="edit" title="${t('subjects.actionEdit')}">✏️</button>
          <button class="btn--icon" data-action="delete" title="${t('subjects.actionDelete')}">🗑️</button>
        </td>
      </tr>`;
    }).join('');
  }

  subjectsBody.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const tr = btn.closest('tr');
    const id = tr.dataset.id;
    if (btn.dataset.action === 'print') {
      printSubject(id);
    } else if (btn.dataset.action === 'edit') {
      const s = subjects.find(s => s.id === id);
      if (!s) return;
      editingId = id;
      fillForm(s);
      saveBtn.textContent = t('form.update');
      resultsCard.hidden = true;
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (btn.dataset.action === 'delete') {
      const s = subjects.find(s => s.id === id);
      if (!s) return;
      if (!confirm(t('subjects.confirmDelete').replace('{name}', s.nombre))) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects(subjects);
      renderSubjects();
      renderStats();
      renderChart();
      toast(t('subjects.toastDeleted'));
    }
  });

  document.getElementById('clearAllBtn').addEventListener('click', () => {
    if (subjects.length === 0) return;
    if (!confirm(t('subjects.confirmClearAll'))) return;
    subjects = [];
    saveSubjects(subjects);
    renderSubjects();
    renderStats();
    renderChart();
    toast(t('subjects.toastClearedAll'));
  });

  /* ---------- CSV export / import ---------- */

  // raw measurement fields have no unit in their own label (unlike peso/talla,
  // whose field.* label already reads "Peso (kg)" / "Talla (cm)") — append one
  // here so the exported header is self-describing without double-labeling.
  const RAW_FIELD_UNITS = { muneca: 'cm', humero: 'cm', femur: 'cm', brCont: 'cm', cintura: 'cm', cadera: 'cm',
    pantMed: 'cm', trc: 'mm', ssc: 'mm', ssp: 'mm', abd: 'mm', mmed: 'mm', pant: 'mm' };

  function rawFieldHeader(f) {
    const unit = RAW_FIELD_UNITS[f];
    return unit ? `${t('field.' + f)} [${unit}]` : t('field.' + f);
  }

  // [csv key, getter(r), i18n label key, unit-or-null]. Order defines column order.
  const CSV_RESULT_COLUMNS = [
    ['edad', r => r.edad.toFixed(2), 'result.edad', () => t('unit.years')],
    ['imc', r => r.imc.toFixed(2), 'result.imc', () => 'kg/m2'],
    ['icc', r => r.icc.toFixed(2), 'result.icc', null],
    ['suma6pliegues', r => r.s6pl.toFixed(1), 'result.s6pl', () => 'mm'],
    ['pctGrasa', r => r.pctGrasa.toFixed(2), 'result.pctGrasa', null],
    ['pesoGraso', r => r.pesoGraso.toFixed(2), 'result.pesoGraso', () => 'kg'],
    ['pesoOseo', r => r.pesoOseo.toFixed(2), 'result.pesoOseo', () => 'kg'],
    ['pctOseo', r => r.pctOseo.toFixed(2), 'result.pctOseo', null],
    ['pesoMuscular', r => r.pesoMuscular.toFixed(2), 'result.pesoMuscular', () => 'kg'],
    ['pctMuscular', r => r.pctMuscular.toFixed(2), 'result.pctMuscular', null],
    ['pesoResidual', r => r.pesoResidual.toFixed(2), 'result.pesoResidual', () => 'kg'],
    ['pctResidual', r => r.pctResidual.toFixed(2), 'result.pctResidual', null],
    ['endomorfia', r => r.endo.toFixed(2), 'result.endo', null],
    ['mesomorfia', r => r.meso.toFixed(2), 'result.meso', null],
    ['ectomorfia', r => r.ecto.toFixed(2), 'result.ecto', null],
    ['x', r => r.x.toFixed(2), null, null],
    ['y', r => r.y.toFixed(2), null, null],
  ];

  document.getElementById('exportBtn').addEventListener('click', () => {
    if (subjects.length === 0) { toast(t('subjects.toastNoExport')); return; }
    const headers = [
      t('field.nombre'), t('field.sexo'), t('field.nacimiento'), t('field.fecha'),
      ...NUMERIC_FIELDS.map(rawFieldHeader),
      ...CSV_RESULT_COLUMNS.map(([key, , labelKey, unit]) =>
        labelKey ? (unit ? `${t(labelKey)} [${unit()}]` : t(labelKey)) : key),
    ];
    const rows = subjects.map(s => {
      const r = computeAll(s);
      return [s.nombre, s.sexo, s.nacimiento, s.fecha, ...NUMERIC_FIELDS.map(f => s[f]),
        ...CSV_RESULT_COLUMNS.map(([, getter]) => getter(r))];
    });
    const csv = [headers, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'antropometria.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  function csvCell(v) {
    const s = String(v);
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  }

  function parseCSV(text) {
    text = text.replace(/^﻿/, '');
    const rows = [];
    let row = [], field = '', inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else inQuotes = false;
        } else field += c;
      } else if (c === '"') {
        inQuotes = true;
      } else if (c === ',') {
        row.push(field); field = '';
      } else if (c === '\r') {
        // ignore, handled by \n
      } else if (c === '\n') {
        row.push(field); field = '';
        rows.push(row); row = [];
      } else {
        field += c;
      }
    }
    if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
    return rows.filter(r => !(r.length === 1 && r[0] === ''));
  }

  const SEXO_MAP = { F: 'F', FEMENINO: 'F', FEMALE: 'F', M: 'M', MASCULINO: 'M', MALE: 'M' };
  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

  // Recognizes a CSV header whether it's a raw/machine key (talla, peso…) or a
  // human label the app itself would export, in either language, with or
  // without a unit annotation — so a file exported from the app (or hand-built
  // with plain field names) both import correctly.
  function normalizeHeaderText(h) {
    return h.replace(/[[(][^\])]*[\])]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function buildFieldAliasMap() {
    const map = {};
    const add = (label, key) => { if (label) map[normalizeHeaderText(label)] = key; };
    const keys = ['nombre', 'sexo', 'nacimiento', 'fecha', 'edad', 'id', ...NUMERIC_FIELDS];
    for (const key of keys) add(key, key);
    for (const key of ['nombre', 'sexo', 'nacimiento', 'fecha', ...NUMERIC_FIELDS]) {
      add(I18N.es['field.' + key], key);
      add(I18N.en['field.' + key], key);
    }
    add(I18N.es['result.edad'], 'edad');
    add(I18N.en['result.edad'], 'edad');
    return map;
  }

  function parseImportRow(headerIndex, cells, rowNum) {
    const get = (name) => { const i = headerIndex[name]; return i === undefined ? undefined : (cells[i] ?? '').trim(); };
    const errors = [];

    const nombre = get('nombre') || get('id') || '';
    if (!nombre) errors.push(t('import.errMissingName'));

    const sexoRaw = (get('sexo') || '').toUpperCase();
    const sexo = SEXO_MAP[sexoRaw];
    if (!sexo) errors.push(t('import.errMissingSex'));

    const raw = {};
    for (const f of NUMERIC_FIELDS) {
      const v = parseFloat(get(f));
      if (!Number.isFinite(v) || v < 0) errors.push(tf('import.errMissingField', { field: f }));
      else raw[f] = v;
    }

    let nacimiento = get('nacimiento');
    let fecha = get('fecha');
    if (!DATE_RE.test(fecha)) fecha = new Date().toISOString().slice(0, 10);
    if (!DATE_RE.test(nacimiento)) {
      const edad = parseFloat(get('edad'));
      if (Number.isFinite(edad) && edad >= 0) {
        const d = new Date(fecha);
        d.setFullYear(d.getFullYear() - Math.round(edad));
        nacimiento = d.toISOString().slice(0, 10);
      } else {
        errors.push(t('import.errDates'));
      }
    }

    if (errors.length) return { error: tf('import.rowError', { row: rowNum, msg: errors.join('; ') }) };
    return { subject: { id: crypto.randomUUID(), nombre, sexo, nacimiento, fecha, ...raw, createdAt: Date.now() } };
  }

  const importBtn = document.getElementById('importBtn');
  const importInput = document.getElementById('importInput');

  importBtn.addEventListener('click', () => importInput.click());

  importInput.addEventListener('change', () => {
    const file = importInput.files[0];
    importInput.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onerror = () => toast(tf('import.errorParse', { msg: reader.error?.message || 'read error' }));
    reader.onload = () => {
      let rows;
      try {
        rows = parseCSV(String(reader.result));
      } catch (e) {
        toast(tf('import.errorParse', { msg: e.message }));
        return;
      }
      if (rows.length < 2) { toast(t('import.errorEmpty')); return; }

      const header = rows[0].map(h => h.trim());
      const aliasMap = buildFieldAliasMap();
      const headerIndex = {};
      header.forEach((h, i) => {
        const canon = aliasMap[normalizeHeaderText(h)];
        if (canon && !(canon in headerIndex)) headerIndex[canon] = i;
      });
      const requiredAny = ['nombre', 'id'];
      if (!requiredAny.some(h => h in headerIndex)) {
        toast(tf('import.errorNoRequiredCols', { cols: 'nombre / id' }));
        return;
      }
      const missingNumeric = NUMERIC_FIELDS.filter(f => !(f in headerIndex));
      if (missingNumeric.length) {
        toast(tf('import.errorNoRequiredCols', { cols: missingNumeric.join(', ') }));
        return;
      }

      const imported = [];
      const errors = [];
      rows.slice(1).forEach((cells, idx) => {
        const result = parseImportRow(headerIndex, cells, idx + 2);
        if (result.error) errors.push(result.error);
        else imported.push(result.subject);
      });

      if (imported.length === 0) { toast(t('import.toastNone')); if (errors.length) alert(errors.join('\n')); return; }

      if (errors.length) {
        const preview = errors.slice(0, 15).join('\n') + (errors.length > 15 ? `\n… (+${errors.length - 15})` : '');
        const msg = tf('import.confirmSummary', {
          ok: imported.length, total: rows.length - 1, errCount: errors.length, errList: preview,
        });
        if (!confirm(msg)) return;
      }

      subjects.push(...imported);
      saveSubjects(subjects);
      renderSubjects();
      renderStats();
      renderChart();
      toast(errors.length
        ? tf('import.toastDone', { ok: imported.length, errCount: errors.length })
        : tf('import.toastDoneClean', { ok: imported.length }));
    };
    reader.readAsText(file, 'utf-8');
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /* ---------- print / PDF ---------- */

  function fieldGroups() {
    return [
      [t('legend.basicos'), [['peso', t('field.peso')], ['talla', t('field.talla')]]],
      [t('legend.diametros'), [['muneca', t('field.muneca')], ['humero', t('field.humero')], ['femur', t('field.femur')]]],
      [t('legend.perimetros'), [['brCont', t('field.brCont')],
        ['cintura', t('field.cintura')], ['cadera', t('field.cadera')], ['pantMed', t('field.pantMed')]]],
      [t('legend.pliegues'), [['trc', t('field.trc')], ['ssc', t('field.ssc')], ['ssp', t('field.ssp')], ['abd', t('field.abd')], ['mmed', t('field.mmed')], ['pant', t('field.pant')]]],
    ];
  }

  function todayLocalized() {
    return new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'es-UY', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function buildIndividualReportHTML(s, r) {
    const dataRows = fieldGroups().map(([title, fields]) => `
      <tr><th colspan="${fields.length}" class="print-group-head">${title}</th></tr>
      <tr>${fields.map(([, label]) => `<th>${label}</th>`).join('')}</tr>
      <tr>${fields.map(([key]) => `<td>${fmt(s[key], 1)}</td>`).join('')}</tr>
    `).join('');

    const resultRows = [
      [t('result.edad'), `${fmt(r.edad, 1)} ${t('unit.years')}`],
      [t('result.imc'), fmt(r.imc)],
      [t('result.s6pl'), fmt(r.s6pl) + ' mm'],
      [t('result.pctGrasa'), fmt(r.pctGrasa) + ' %'],
      [t('result.pesoGraso'), `${fmt(r.pesoGraso)} kg`],
      [t('result.pesoOseo'), `${fmt(r.pesoOseo)} kg (${fmt(r.pctOseo)} %)`],
      [t('result.pesoMuscular'), `${fmt(r.pesoMuscular)} kg (${fmt(r.pctMuscular)} %)`],
      [t('result.pesoResidual'), `${fmt(r.pesoResidual)} kg (${fmt(r.pctResidual)} %)`],
      [t('result.icc'), fmt(r.icc, 2)],
      [t('result.endo'), fmt(r.endo, 2)],
      [t('result.meso'), fmt(r.meso, 2)],
      [t('result.ecto'), fmt(r.ecto, 2)],
      [t('result.coords'), `${fmt(r.x, 2)}, ${fmt(r.y, 2)}`],
    ];

    return `
      <h1>${t('print.title')}${escapeHtml(s.nombre)}</h1>
      <p class="print-meta">${t('print.sex')}: ${s.sexo === 'F' ? t('field.sexoF') : t('field.sexoM')} · ${t('print.birth')}: ${s.nacimiento} · ${t('print.eval')}: ${s.fecha} · ${t('print.generated')}: ${todayLocalized()}</p>
      <h2>${t('print.sectionData')}</h2>
      <table class="print-table">${dataRows}</table>
      <h2>${t('print.sectionResults')}</h2>
      <table class="print-table print-results">
        ${resultRows.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join('')}
      </table>
      <p class="print-footer">${t('print.footer')}</p>
    `;
  }

  const printIndividualCard = document.getElementById('printIndividualCard');

  function printSubject(id) {
    const s = subjects.find(x => x.id === id);
    if (!s) return;
    const r = computeAll(s);
    printIndividualCard.innerHTML = buildIndividualReportHTML(s, r);
    document.body.classList.add('print-individual');
    window.print();
  }

  window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-individual');
  });

  document.getElementById('printGroupBtn').addEventListener('click', () => {
    if (subjects.length === 0) { toast(t('subjects.toastNoPrint')); return; }
    window.print();
  });

  /* ---------- stats ---------- */

  const statsBody = document.getElementById('statsBody');
  const statsEmptyHint = document.getElementById('statsEmptyHint');
  const statsTable = document.getElementById('statsTable');

  function mean(a) { return a.reduce((x, y) => x + y, 0) / a.length; }
  function sampleSd(a) {
    if (a.length < 2) return 0;
    const m = mean(a);
    return Math.sqrt(a.reduce((s, v) => s + (v - m) ** 2, 0) / (a.length - 1));
  }
  function median(a) {
    const b = [...a].sort((x, y) => x - y);
    const mid = Math.floor(b.length / 2);
    return b.length % 2 ? b[mid] : (b[mid - 1] + b[mid]) / 2;
  }

  function renderStats() {
    const has = subjects.length > 0;
    statsTable.hidden = !has;
    statsEmptyHint.hidden = has;
    if (!has) { statsBody.innerHTML = ''; return; }

    const rows = subjects.map(computeAll);
    const cols = {
      'IMC': rows.map(r => r.imc),
      'ICC': rows.map(r => r.icc),
      '% Grasa': rows.map(r => r.pctGrasa),
      'Endo': rows.map(r => r.endo),
      'Meso': rows.map(r => r.meso),
      'Ecto': rows.map(r => r.ecto),
    };
    const stats = [
      [t('stats.mean'), v => mean(v)],
      [t('stats.sd'), v => sampleSd(v)],
      [t('stats.median'), v => median(v)],
      [t('stats.max'), v => Math.max(...v)],
      [t('stats.min'), v => Math.min(...v)],
    ];
    statsBody.innerHTML = stats.map(([label, fn]) => {
      const cells = Object.values(cols).map(v => `<td>${fmt(fn(v), 2)}</td>`).join('');
      return `<tr><th>${label}</th>${cells}</tr>`;
    }).join('');
  }

  /* ---------- somatochart (Reuleaux triangle) ---------- */
  // Geometry follows the classic somatochart proportions (Siders & Rue, 1992,
  // "Reuleaux triangle somatocharts", Computers in Biology and Medicine 22(5)):
  // an equilateral reference triangle (Endo / Meso / Ecto vertices) whose
  // centroid sits at the origin — the point where the three components are
  // equal — with each side replaced by a circular arc centered on the
  // opposite vertex, bulging outward.

  const svg = document.getElementById('somatoChart');
  const chartTooltip = document.getElementById('chartTooltip');
  const chartEmptyHint = document.getElementById('chartEmptyHint');
  const chartLegend = document.getElementById('chartLegend');

  const SVG_NS = 'http://www.w3.org/2000/svg';
  // Margins sized so the plotted area is square (equal px-per-unit on both
  // axes) — required for the arcs below to render as true circles, not ellipses.
  const CHART = { w: 560, h: 552, m: { top: 24, right: 24, bottom: 46, left: 54 } };
  const DOMAIN = { xMin: -13, xMax: 13, yMin: -11, yMax: 15 };
  svg.setAttribute('viewBox', `0 0 ${CHART.w} ${CHART.h}`);

  const TRI_SIDE = 20;
  const TRI_R = TRI_SIDE / Math.sqrt(3);       // centroid → vertex
  const TRI_APOTHEM = TRI_SIDE / (2 * Math.sqrt(3)); // centroid → side
  const V_MESO = { x: 0, y: TRI_R };
  const V_ENDO = { x: -TRI_SIDE / 2, y: -TRI_APOTHEM };
  const V_ECTO = { x: TRI_SIDE / 2, y: -TRI_APOTHEM };

  function el(tag, attrs = {}) {
    const n = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  }

  function sx(x) {
    const { left, right } = CHART.m;
    const w = CHART.w - left - right;
    return left + (x - DOMAIN.xMin) / (DOMAIN.xMax - DOMAIN.xMin) * w;
  }
  function sy(y) {
    const { top, bottom } = CHART.m;
    const h = CHART.h - top - bottom;
    return top + h - (y - DOMAIN.yMin) / (DOMAIN.yMax - DOMAIN.yMin) * h;
  }
  const proj = (v) => ({ x: sx(v.x), y: sy(v.y) });

  // Points (in pixel space) along the minor (60°) arc of the circle centered
  // at `center` from `from` to `to` — avoids SVG arc-flag sign ambiguity.
  function arcPoints(center, from, to, n = 28) {
    const radius = Math.hypot(from.x - center.x, from.y - center.y);
    const a0 = Math.atan2(from.y - center.y, from.x - center.x);
    let a1 = Math.atan2(to.y - center.y, to.x - center.x);
    let diff = a1 - a0;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const a = a0 + diff * (i / n);
      pts.push({ x: center.x + radius * Math.cos(a), y: center.y + radius * Math.sin(a) });
    }
    return pts;
  }

  function reuleauxPathD() {
    const meso = proj(V_MESO), endo = proj(V_ENDO), ecto = proj(V_ECTO);
    const pts = [
      ...arcPoints(meso, endo, ecto),
      ...arcPoints(endo, ecto, meso),
      ...arcPoints(ecto, meso, endo),
    ];
    return 'M ' + pts.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' L ') + ' Z';
  }

  function renderChart() {
    svg.innerHTML = '';
    const has = subjects.length > 0;
    chartEmptyHint.hidden = has;
    svg.style.display = has ? '' : 'none';
    chartLegend.style.display = has ? '' : 'none';
    if (!has) return;

    chartLegend.innerHTML = `
      <span class="legend__item"><span class="legend__swatch" style="background:var(--series-1)"></span>${t('chart.legendF')}</span>
      <span class="legend__item"><span class="legend__swatch" style="background:var(--series-2)"></span>${t('chart.legendM')}</span>
      <span class="legend__item">${t('chart.legendAvg')}</span>`;

    const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const mutedColor = cssVar('--text-muted');
    const surfaceColor = cssVar('--surface-card');
    const triColor = cssVar('--text-secondary');
    const sectorColor = cssVar('--border-strong');
    const gridColor = cssVar('--border');

    const centroidPx = proj({ x: 0, y: 0 });
    const mesoPx = proj(V_MESO), endoPx = proj(V_ENDO), ectoPx = proj(V_ECTO);

    // background grid + numeric ticks, every 5 units. The x=0/y=0 lines are
    // left to the dashed centroid→vertex sector lines drawn below, so they
    // aren't double-drawn as a solid+dashed line in the same place.
    const TICK = 5;
    for (let gx = Math.ceil(DOMAIN.xMin / TICK) * TICK; gx <= DOMAIN.xMax; gx += TICK) {
      if (gx !== 0) {
        svg.appendChild(el('line', {
          x1: sx(gx), x2: sx(gx), y1: sy(DOMAIN.yMin), y2: sy(DOMAIN.yMax),
          stroke: gridColor, 'stroke-width': 1,
        }));
      }
      const t = el('text', { x: sx(gx), y: sy(DOMAIN.yMin) + 16, 'text-anchor': 'middle', 'font-size': 10, fill: mutedColor });
      t.textContent = gx;
      svg.appendChild(t);
    }
    for (let gy = Math.ceil(DOMAIN.yMin / TICK) * TICK; gy <= DOMAIN.yMax; gy += TICK) {
      svg.appendChild(el('line', {
        x1: sx(DOMAIN.xMin), x2: sx(DOMAIN.xMax), y1: sy(gy), y2: sy(gy),
        stroke: gridColor, 'stroke-width': 1,
      }));
      const t = el('text', { x: sx(DOMAIN.xMin) - 8, y: sy(gy) + 3, 'text-anchor': 'end', 'font-size': 10, fill: mutedColor });
      t.textContent = gy;
      svg.appendChild(t);
    }

    // outer Reuleaux triangle boundary
    svg.appendChild(el('path', {
      d: reuleauxPathD(), fill: 'none', stroke: triColor, 'stroke-width': 1.5, 'stroke-linejoin': 'round',
    }));

    // X=0 reference line, full height (doubles as the centroid→Mesomorfia sector line)
    svg.appendChild(el('line', {
      x1: centroidPx.x, y1: sy(DOMAIN.yMin), x2: centroidPx.x, y2: sy(DOMAIN.yMax),
      stroke: sectorColor, 'stroke-width': 1, 'stroke-dasharray': '4 3',
    }));
    // diagonal sector lines: centroid → Endo / Ecto vertices
    for (const v of [endoPx, ectoPx]) {
      svg.appendChild(el('line', {
        x1: centroidPx.x, y1: centroidPx.y, x2: v.x, y2: v.y,
        stroke: sectorColor, 'stroke-width': 1, 'stroke-dasharray': '4 3',
      }));
    }

    // vertex labels — placed below the triangle's lowest point (the bottom
    // arc dips below the Endo/Ecto vertices themselves) so they never sit on the curve
    const bottomMostY = Math.max(...arcPoints(mesoPx, endoPx, ectoPx).map(p => p.y));
    const vLabel = (x, y, text, anchor) => {
      const t = el('text', { x, y, 'text-anchor': anchor, 'font-size': 12, 'font-weight': 600, fill: mutedColor });
      t.textContent = text;
      svg.appendChild(t);
    };
    vLabel(mesoPx.x, mesoPx.y - 10, t('chart.vertexMeso'), 'middle');
    vLabel(endoPx.x, bottomMostY + 16, t('chart.vertexEndo'), 'middle');
    vLabel(ectoPx.x, bottomMostY + 16, t('chart.vertexEcto'), 'middle');

    // axis labels
    const xLabel = el('text', { x: (sx(DOMAIN.xMin) + sx(DOMAIN.xMax)) / 2, y: CHART.h - 8, 'text-anchor': 'middle', 'font-size': 11, fill: mutedColor });
    xLabel.textContent = t('chart.xLabel');
    svg.appendChild(xLabel);

    const yMid = (sy(DOMAIN.yMin) + sy(DOMAIN.yMax)) / 2;
    const yLabel = el('text', { x: 14, y: yMid, 'text-anchor': 'middle', 'font-size': 11, fill: mutedColor, transform: `rotate(-90 14 ${yMid})` });
    yLabel.textContent = t('chart.yLabel');
    svg.appendChild(yLabel);

    const withResults = subjects.map(s => ({ s, r: computeAll(s) }));

    withResults.forEach(({ s, r }) => {
      const cx = sx(r.x), cy = sy(r.y);
      const color = s.sexo === 'F' ? 'var(--series-1)' : 'var(--series-2)';
      const dot = el('circle', {
        cx, cy, r: 6,
        fill: color,
        stroke: surfaceColor,
        'stroke-width': 2,
        tabindex: 0,
        role: 'img',
        'aria-label': `${s.nombre}: endomorfia ${fmt(r.endo, 2)}, mesomorfia ${fmt(r.meso, 2)}, ectomorfia ${fmt(r.ecto, 2)}`,
      });
      dot.style.cursor = 'pointer';
      const show = () => {
        chartTooltip.hidden = false;
        chartTooltip.style.left = cx / CHART.w * 100 + '%';
        chartTooltip.style.top = cy / CHART.h * 100 + '%';
        chartTooltip.innerHTML = `<strong>${escapeHtml(s.nombre)}</strong><br>Endo ${fmt(r.endo, 2)} · Meso ${fmt(r.meso, 2)} · Ecto ${fmt(r.ecto, 2)}`;
      };
      const hide = () => { chartTooltip.hidden = true; };
      dot.addEventListener('mouseenter', show);
      dot.addEventListener('mouseleave', hide);
      dot.addEventListener('focus', show);
      dot.addEventListener('blur', hide);
      svg.appendChild(dot);
    });

    // group-average markers (✕), one per sex present
    for (const sexo of ['F', 'M']) {
      const group = withResults.filter(w => w.s.sexo === sexo);
      if (group.length === 0) continue;
      const mx = mean(group.map(w => w.r.x));
      const my = mean(group.map(w => w.r.y));
      const cx = sx(mx), cy = sy(my);
      const color = sexo === 'F' ? 'var(--series-1)' : 'var(--series-2)';
      const arm = 7;
      const cross = el('path', {
        d: `M ${cx - arm},${cy - arm} L ${cx + arm},${cy + arm} M ${cx - arm},${cy + arm} L ${cx + arm},${cy - arm}`,
        stroke: color, 'stroke-width': 3, 'stroke-linecap': 'round',
        tabindex: 0, role: 'img',
        'aria-label': `${sexo === 'F' ? t('chart.avgFemale') : t('chart.avgMale')}: X ${fmt(mx, 2)}, Y ${fmt(my, 2)}`,
      });
      const show = () => {
        chartTooltip.hidden = false;
        chartTooltip.style.left = cx / CHART.w * 100 + '%';
        chartTooltip.style.top = cy / CHART.h * 100 + '%';
        chartTooltip.innerHTML = `<strong>${sexo === 'F' ? t('chart.avgFemale') : t('chart.avgMale')}</strong> (n=${group.length})<br>X ${fmt(mx, 2)} · Y ${fmt(my, 2)}`;
      };
      const hide = () => { chartTooltip.hidden = true; };
      cross.addEventListener('mouseenter', show);
      cross.addEventListener('mouseleave', hide);
      cross.addEventListener('focus', show);
      cross.addEventListener('blur', hide);
      svg.appendChild(cross);
    }
  }

  /* ---------- toast ---------- */

  let toastTimer = null;
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
  }

  /* ---------- language toggle ---------- */

  document.getElementById('langToggleBtn').addEventListener('click', () => {
    setLang(lang === 'es' ? 'en' : 'es');
  });

  /* ---------- PWA install ---------- */

  let deferredPrompt = null;
  const installBtn = document.getElementById('installBtn');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });
  window.addEventListener('appinstalled', () => { installBtn.hidden = true; });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(err => console.error('SW error', err));
    });
  }

  /* ---------- init ---------- */

  applyStaticI18n();
  resetForm();
  renderSubjects();
  renderStats();
  renderChart();
})();
