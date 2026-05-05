$(document).ready(function() {

    var PRESET_COURSES = [
        {
            id: 'course-python',
            title: 'Python për Fillestarët',
            description: 'Mëso bazat e programimit në Python nga e para. Ky kurs mbulon variablat, strukturat e të dhënave, funksionet dhe më shumë.',
            category: 'python',
            icon: 'fab fa-python',
            created_at: '2026-01-15T10:00:00Z',
            materials: [
                { id: 'm1', title: 'Hyrje në Python', type: 'video', filename: 'intro-python.mp4', uploaded_at: '2026-01-15T10:00:00Z' },
                { id: 'm2', title: 'Variablat dhe Tipet e të Dhënave', type: 'video', filename: 'variables.mp4', uploaded_at: '2026-01-16T10:00:00Z' },
                { id: 'm3', title: 'Strukturat e Kontrollit', type: 'video', filename: 'control-structures.mp4', uploaded_at: '2026-01-17T10:00:00Z' },
                { id: 'm4', title: 'Funksionet në Python', type: 'video', filename: 'functions.mp4', uploaded_at: '2026-01-18T10:00:00Z' },
                { id: 'm5', title: 'Notat e Kursit', type: 'document', filename: 'python-notes.pdf', uploaded_at: '2026-01-19T10:00:00Z' }
            ]
        },
        {
            id: 'course-js',
            title: 'JavaScript Modern',
            description: 'Mëso JavaScript nga bazat deri tek konceptet e avancuara. ES6+, async/await, dhe më shumë.',
            category: 'programming',
            icon: 'fab fa-js',
            created_at: '2026-01-20T10:00:00Z',
            materials: [
                { id: 'm6', title: 'Bazat e JavaScript', type: 'video', filename: 'js-basics.mp4', uploaded_at: '2026-01-20T10:00:00Z' },
                { id: 'm7', title: 'ES6+ Features', type: 'video', filename: 'es6-features.mp4', uploaded_at: '2026-01-21T10:00:00Z' },
                { id: 'm8', title: 'DOM Manipulation', type: 'video', filename: 'dom-manipulation.mp4', uploaded_at: '2026-01-22T10:00:00Z' },
                { id: 'm9', title: 'Async JavaScript', type: 'video', filename: 'async-js.mp4', uploaded_at: '2026-01-23T10:00:00Z' }
            ]
        },
        {
            id: 'course-html-css',
            title: 'HTML & CSS nga Zero në Hero',
            description: 'Mëso si të krijoni faqe interneti të bukura dhe responsive me HTML5 dhe CSS3.',
            category: 'design',
            icon: 'fab fa-html5',
            created_at: '2026-02-01T10:00:00Z',
            materials: [
                { id: 'm10', title: 'Hyrje në HTML', type: 'video', filename: 'html-intro.mp4', uploaded_at: '2026-02-01T10:00:00Z' },
                { id: 'm11', title: 'Elementet Themelore HTML', type: 'video', filename: 'html-elements.mp4', uploaded_at: '2026-02-02T10:00:00Z' },
                { id: 'm12', title: 'CSS Basics', type: 'video', filename: 'css-basics.mp4', uploaded_at: '2026-02-03T10:00:00Z' },
                { id: 'm13', title: 'Flexbox dhe Grid', type: 'video', filename: 'flexbox-grid.mp4', uploaded_at: '2026-02-04T10:00:00Z' },
                { id: 'm14', title: 'Responsive Design', type: 'video', filename: 'responsive.mp4', uploaded_at: '2026-02-05T10:00:00Z' }
            ]
        },
        {
            id: 'course-sql',
            title: 'SQL dhe Bazat e të Dhënave',
            description: 'Mëso si të menaxhoni bazat e të dhënave me SQL. SELECT, INSERT, UPDATE, DELETE dhe më shumë.',
            category: 'database',
            icon: 'fas fa-database',
            created_at: '2026-02-10T10:00:00Z',
            materials: [
                { id: 'm15', title: 'Hyrje në Bazat e të Dhënave', type: 'video', filename: 'db-intro.mp4', uploaded_at: '2026-02-10T10:00:00Z' },
                { id: 'm16', title: 'Krijimi i Tabelave', type: 'video', filename: 'create-tables.mp4', uploaded_at: '2026-02-11T10:00:00Z' },
                { id: 'm17', title: 'SELECT Queries', type: 'video', filename: 'select-queries.mp4', uploaded_at: '2026-02-12T10:00:00Z' },
                { id: 'm18', title: 'JOIN Operations', type: 'video', filename: 'joins.mp4', uploaded_at: '2026-02-13T10:00:00Z' }
            ]
        },
        {
            id: 'course-react',
            title: 'React.js Fundamentals',
            description: 'Mëso React nga bazat. Komponentët, Hooks, State Management dhe më shumë.',
            category: 'programming',
            icon: 'fab fa-react',
            created_at: '2026-02-20T10:00:00Z',
            materials: [
                { id: 'm19', title: 'Çfarë është React?', type: 'video', filename: 'what-is-react.mp4', uploaded_at: '2026-02-20T10:00:00Z' },
                { id: 'm20', title: 'Komponentët në React', type: 'video', filename: 'components.mp4', uploaded_at: '2026-02-21T10:00:00Z' },
                { id: 'm21', title: 'Props dhe State', type: 'video', filename: 'props-state.mp4', uploaded_at: '2026-02-22T10:00:00Z' },
                { id: 'm22', title: 'React Hooks', type: 'video', filename: 'hooks.mp4', uploaded_at: '2026-02-23T10:00:00Z' }
            ]
        }
    ];

    var PRESET_TESTS = [
        {
            id: 'test-python-basics',
            title: 'Testi i Python - Bazat',
            description: 'Testo njohuritë e tua për bazat e Python: variablat, tipet e të dhënave, operatorët dhe strukturat e kontrollit.',
            time_limit: 15,
            course_id: 'course-python',
            created_at: '2026-01-25T10:00:00Z',
            questions: [
                {
                    question: 'Cili është output i kodit: print(type(5))?',
                    options: ['<class \'int\'>', '<class \'str\'>', '<class \'float\'>', '<class \'number\'>'],
                    correct_answer: 0
                },
                {
                    question: 'Cili operator përdoret për exponentiation (ngritje në fuqi) në Python?',
                    options: ['^', '**', '^^', 'pow'],
                    correct_answer: 1
                },
                {
                    question: 'Si deklarohet një listë në Python?',
                    options: ['list = (1, 2, 3)', 'list = [1, 2, 3]', 'list = {1, 2, 3}', 'list = <1, 2, 3>'],
                    correct_answer: 1
                },
                {
                    question: 'Cila është fjala kyçe për të krijuar një funksion në Python?',
                    options: ['function', 'func', 'def', 'define'],
                    correct_answer: 2
                },
                {
                    question: 'Çfarë bën fjala kyçe "break" në një loop?',
                    options: ['Përsërit loop-un', 'Ndalon loop-un dhe del prej saj', 'Kthen vlerën e loop-ut', 'Vazhdon loop-un'],
                    correct_answer: 1
                },
                {
                    question: 'Cili është rezultati i: len("Hello")?',
                    options: ['4', '5', '6', 'Error'],
                    correct_answer: 1
                },
                {
                    question: 'Si shkruhet një koment në Python?',
                    options: ['// koment', '/* koment */', '# koment', '<!-- koment -->'],
                    correct_answer: 2
                },
                {
                    question: 'Cili metodë përdoret për të shtuar një element në fund të një liste?',
                    options: ['add()', 'insert()', 'append()', 'push()'],
                    correct_answer: 2
                },
                {
                    question: 'Çfarë tipi të dhënash është: {"name": "John", "age": 25}?',
                    options: ['List', 'Tuple', 'Dictionary', 'Set'],
                    correct_answer: 2
                },
                {
                    question: 'Cili është rezultati i: 10 // 3?',
                    options: ['3.33', '3', '4', 'Error'],
                    correct_answer: 1
                }
            ]
        },
        {
            id: 'test-js-advanced',
            title: 'Testi i JavaScript - i Avancuar',
            description: 'Testo njohuritë e tua për JavaScript të avancuar: ES6+, Async/Await, Promises dhe më shumë.',
            time_limit: 20,
            course_id: 'course-js',
            created_at: '2026-02-01T10:00:00Z',
            questions: [
                {
                    question: 'Cila është diferenca mes "let" dhe "const"?',
                    options: [
                        'Nuk ka diferencë',
                        'let mund të rishkruhet, const jo',
                        'const mund të rishkruhet, let jo',
                        'Të dy janë të njëjta si var'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë bën arrow function në JavaScript?',
                    options: [
                        'Kthen një vlerë automatikisht',
                        'Krijon një funksion me sintaksë më të shkurtër',
                        'Bën të njëjtën gjë si function normal',
                        'Krijon një funksion asinkron'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është output i kodit: console.log(typeof null)?',
                    options: ['null', 'undefined', 'object', 'boolean'],
                    correct_answer: 2
                },
                {
                    question: 'Çfarë bën metoda .map() në JavaScript?',
                    options: [
                        'Filtron elementet',
                        'Kthen një array të ri nga çdo element',
                        'Gjen një element',
                        'Rendit elementet'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë është destructuring në JavaScript?',
                    options: [
                        'Fshirja e variablave',
                        'Ekstraktimi i vlerave nga objektet/array-t',
                        'Krijimi i objekteve të reja',
                        'Kombinimi i dy arrays'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është rezultati i: Promise.resolve(5).then(x => x * 2)?',
                    options: ['5', '10', 'Promise', 'Error'],
                    correct_answer: 2
                },
                {
                    question: 'Çfarë bën fjala kyçe "async" përpara një funksioni?',
                    options: [
                        'Bën funksionin më të shpejtë',
                        'Funksioni kthen një Promise automatikisht',
                        'Bën funksionin të bllokojë ekzekutimin',
                        'Fshin funksionin'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cila është diferenca mes "==" dhe "===" në JavaScript?',
                    options: [
                        'Nuk ka diferencë',
                        '== krahason vlerat, === krahason vlerat dhe tipet',
                        '=== krahason vetëm vlerat',
                        '== është më i shpejtë'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë është spread operator (...) në JavaScript?',
                    options: [
                        'Përdoret për të përhapur elementet e një objekti/array',
                        'Përdoret për të llogarit',
                        'Përdoret për të krahasuar',
                        'Përdoret për të bllokuar'
                    ],
                    correct_answer: 0
                },
                {
                    question: 'Cili është rezultati i: [...[1,2], ...[3,4]]?',
                    options: ['[[1,2],[3,4]]', '[1,2,3,4]', '[1,2,[3,4]]', 'Error'],
                    correct_answer: 1
                }
            ]
        },
        {
            id: 'test-html-css',
            title: 'Testi i HTML & CSS',
            description: 'Testo njohuritë e tua për HTML5 dhe CSS3: elementet, atributet, selectorët dhe layout-et.',
            time_limit: 12,
            course_id: 'course-html-css',
            created_at: '2026-02-10T10:00:00Z',
            questions: [
                {
                    question: 'Cili element HTML përdoret për të krijuar një lidhje (link)?',
                    options: ['<link>', '<a>', '<href>', '<url>'],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë bën atributi "alt" në etiketën <img>?',
                    options: [
                        'Vendos përmasat e fotos',
                        'Përcakton tekstin alternativ kur fotoja nuk ngarkohet',
                        'Bën foton të klikueshme',
                        'Vendos URL-në e fotos'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është elementi HTML për të krijuar një listë të renditur?',
                    options: ['<ul>', '<li>', '<ol>', '<list>'],
                    correct_answer: 2
                },
                {
                    question: 'Çfarë bën properti CSS "display: flex"?',
                    options: [
                        'Fshin elementin',
                        'Bën elementin të dukshëm',
                        'Krijon një flexbox layout',
                        'Vendos ngjyrën e sfondit'
                    ],
                    correct_answer: 2
                },
                {
                    question: 'Si vendoset ngjyra e tekstit në CSS?',
                    options: ['text-color', 'font-color', 'color', 'foreground-color'],
                    correct_answer: 2
                },
                {
                    question: 'Cili është qëllimi i etiketës <meta charset="UTF-8">?',
                    options: [
                        'Vendos titullin e faqes',
                        'Përcakton kodimin e karaktereve',
                        'Shton një përshkrim',
                        'Vendos stilin CSS'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili selector CSS zgjedh të gjithë elementet <p>?',
                    options: ['#p', '.p', 'p', '*p'],
                    correct_answer: 2
                },
                {
                    question: 'Çfarë bën properti CSS "position: absolute"?',
                    options: [
                        'Elementi qëndron në vendin e tij natyral',
                        'Elementi pozicionohet relativisht prindit të pozicionuar',
                        'Elementi pozicionohet relativisht viewport-it',
                        'Elementi bëhet i padukshëm'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është elementi HTML5 për video?',
                    options: ['<media>', '<video>', '<movie>', '<player>'],
                    correct_answer: 1
                },
                {
                    question: 'Si bëhet një koment shumë-rreshtësh në CSS?',
                    options: ['// koment', '# koment', '/* koment */', '<!-- koment -->'],
                    correct_answer: 2
                }
            ]
        },
        {
            id: 'test-sql',
            title: 'Testi i SQL - Kërkesat Bazike',
            description: 'Testo njohuritë e tua për SQL: SELECT, INSERT, UPDATE, DELETE, JOIN dhe funksionet agreguese.',
            time_limit: 18,
            course_id: 'course-sql',
            created_at: '2026-02-15T10:00:00Z',
            questions: [
                {
                    question: 'Cila është fraza SQL për të zgjedhur të gjitha kolonat nga një tabelë?',
                    options: ['SELECT * FROM table', 'SELECT ALL FROM table', 'SELECT table.*', 'GET * FROM table'],
                    correct_answer: 0
                },
                {
                    question: 'Cila klauzolë SQL përdoret për të filtruar rezultatet?',
                    options: ['FILTER', 'WHERE', 'HAVING', 'LIMIT'],
                    correct_answer: 1
                },
                {
                    question: 'Cili JOIN kthen të gjitha rekordet nga të dy tabelat?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
                    correct_answer: 3
                },
                {
                    question: 'Çfarë bën komanda INSERT INTO?',
                    options: [
                        'Fshin të dhëna nga tabela',
                        'Përditëson të dhëna ekzistuese',
                        'Shton të dhëna të reja në tabelë',
                        'Krijon një tabelë të re'
                    ],
                    correct_answer: 2
                },
                {
                    question: 'Cili funksion SQL llogarit numrin e rreshtave?',
                    options: ['SUM()', 'COUNT()', 'TOTAL()', 'NUM()'],
                    correct_answer: 1
                },
                {
                    question: 'Si renditen rezultatet në SQL?',
                    options: ['ORDER BY', 'SORT BY', 'arrange', 'GROUP BY'],
                    correct_answer: 0
                },
                {
                    question: 'Cila klauzolë përdoret për të grupuar rreshtat në SQL?',
                    options: ['GROUP BY', 'ARRANGE BY', 'COLLECT BY', 'BUNDLE BY'],
                    correct_answer: 0
                },
                {
                    question: 'Çfarë bën komanda DELETE FROM tabela WHERE kushti?',
                    options: [
                        'Fshin të gjitha rreshtat nga tabela',
                        'Fshin rreshtat që përmbushin kushtin',
                        'Fshin kolonat nga tabela',
                        'Fshin vetëm tabelën'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është rezultati i: SELECT DISTINCT column FROM table?',
                    options: [
                        'Zgjedh të gjitha vlerat',
                        'Zgjedh vetëm vlerat unike',
                        'Zgjedh vlerat e përsëritura',
                        'Zgjedh vlerat null'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili operator SQL përdoret për të kërkuar një model në tekstin?',
                    options: ['EQUALS', 'MATCHES', 'LIKE', 'CONTAINS'],
                    correct_answer: 2
                }
            ]
        },
        {
            id: 'test-react',
            title: 'Testi i React - Konceptet Bazike',
            description: 'Testo njohuritë e tua për React: komponentët, props, state, hooks dhe lifecycle.',
            time_limit: 15,
            course_id: 'course-react',
            created_at: '2026-02-25T10:00:00Z',
            questions: [
                {
                    question: 'Çfarë është JSX në React?',
                    options: [
                        'Një gjuhë programimi e re',
                        'Sintaksë për të shkruar HTML në JavaScript',
                        'Një lloj i ri i CSS',
                        'Një bibliotekë për bazat e të dhënave'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili hook përdoret për të menaxhuar state në komponentët funksional?',
                    options: ['useEffect', 'useState', 'useContext', 'useReducer'],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë është "props" në React?',
                    options: [
                        'Variabla lokale të komponentit',
                        'Të dhëna të kaluara nga prindi te fëmija',
                        'Metoda për të modifikuar DOM',
                        'Stile CSS inline'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është qëllimi i useEffect hook?',
                    options: [
                        'Krijimi i state',
                        'Përpunimi i efekteve anësore',
                        'Krijimi i referencave',
                        'Menaxhimi i kontekstit'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Si krijohet një komponent funksional në React?',
                    options: [
                        'class Component extends React',
                        'function Component() { return <div/> }',
                        'new Component()',
                        'component.create()'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë bën virtual DOM në React?',
                    options: [
                        'Zëvendëson real DOM',
                        'Përmirëson performancën duke përditësuar vetëm pjesët e ndryshuara',
                        'Krijon elemente të reja HTML',
                        'Menaxhon CSS-in'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili metodë përdoret për të ngritur (lift up) state nga fëmija te prindi?',
                    options: ['setState', 'callback functions', 'props drilling', 'context API'],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë është Conditional Rendering në React?',
                    options: [
                        'Rendering sipas kushteve',
                        'Renderimi automatik i komponentëve',
                        'Rendering i të dhënave nga API',
                        'Rendering i listave'
                    ],
                    correct_answer: 0
                },
                {
                    question: 'Cili është qëllimi i useRef hook?',
                    options: [
                        'Krijimi i state të ri',
                        'Krijimi i referencave të mënyrës së vjetër',
                        'Përdorimi i kontekstit',
                        'Menaxhimi i efekteve'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Si krijohet një lista renderizuese në React?',
                    options: [
                        'Me një loop for',
                        'Me metoda .map()',
                        'Me metoda .forEach()',
                        'Me komandën render'
                    ],
                    correct_answer: 1
                }
            ]
        },
        {
            id: 'test-web-dev',
            title: 'Testi i Përgjithshëm i Web Development',
            description: 'Test i përgjithshëm që mbulon HTML, CSS, JavaScript dhe koncepte të përgjithshme të zhvillimit web.',
            time_limit: 20,
            course_id: null,
            created_at: '2026-03-01T10:00:00Z',
            questions: [
                {
                    question: 'Çfarë do të thotë HTML?',
                    options: [
                        'Hyper Text Markup Language',
                        'High Tech Modern Language',
                        'Home Tool Markup Language',
                        'Hyperlink Text Management Language'
                    ],
                    correct_answer: 0
                },
                {
                    question: 'Cili është roli i CSS?',
                    options: [
                        'Të trajtojë logjikën e faqes',
                        'Të stilohet dhe formatohet faqja',
                        'Të lidhet me serverin',
                        'Të ruajë të dhënat'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë është API?',
                    options: [
                        'Application Programming Interface',
                        'Advanced Program Integration',
                        'Application Process Integration',
                        'Automated Programming Interface'
                    ],
                    correct_answer: 0
                },
                {
                    question: 'Cili është porti standard për HTTPS?',
                    options: ['80', '443', '8080', '3000'],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë bën komanda "git clone"?',
                    options: [
                        'Krijon një repository të ri',
                        'Kopjon një repository ekzistues lokalisht',
                        'Fshin një repository',
                        'Përditëson një repository'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është qëllimi i localStorage?',
                    options: [
                        'Të ruajë të dhëna në server',
                        'Të ruajë të dhëna në shfletues',
                        'Të ruajë cookies',
                        'Të ruajë session data'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë është Responsive Design?',
                    options: [
                        'Dizajn që reagon shpejt',
                        'Dizajn që adaptohet në pajisje të ndryshme',
                        'Dizajn me animacione',
                        'Dizajn interaktiv'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është qëllimi i Bootstrap?',
                    options: [
                        'Të krijojë serverë',
                        'Të ofrojë CSS framework për UI',
                        'Të menaxhojë bazat e të dhënave',
                        'Të krijojë API'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Çfarë është JSON?',
                    options: [
                        'Një gjuhë programimi',
                        'Një format për shkëmbimin e të dhënave',
                        'Një sistem kontrolli versionesh',
                        'Një lloj databases'
                    ],
                    correct_answer: 1
                },
                {
                    question: 'Cili është status code për "Not Found"?',
                    options: ['200', '301', '404', '500'],
                    correct_answer: 2
                }
            ]
        }
    ];
    function getData(key) {
        var data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    function setData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    function initPresetData() {
    
        if (!getData('courses')) {
            setData('courses', PRESET_COURSES);
        }

        var existingTests = getData('tests');
        if (!existingTests || existingTests.length === 0) {
            setData('tests', PRESET_TESTS);
        } else {
          
            var userTests = existingTests.filter(function(t) {
                return !PRESET_TESTS.find(function(pt) { return pt.id === t.id; });
            });
            setData('tests', PRESET_TESTS.concat(userTests));
        }

        if (!getData('comments')) {
            setData('comments', [
                { id: 'c1', content: 'Ky është një komunitet i shkëlqyer për të mësuar programim! Rekomandoj të gjithëve.', author: 'Arben K.', course_id: null, created_at: '2026-03-01T10:00:00Z' },
                { id: 'c2', content: 'Kursi i Python është shumë i detajuar. Falënderoj instruktorin për punën e shkëlqyer!', author: 'Elira M.', course_id: 'course-python', created_at: '2026-03-02T14:30:00Z' },
                { id: 'c3', content: 'A ka dikush ndonjë rekomandim për kurse të avancuara të JavaScript?', author: 'Dritan P.', course_id: 'course-js', created_at: '2026-03-03T09:15:00Z' }
            ]);
        }

        if (!getData('results')) {
            setData('results', []);
        }
    }

    function generateId() {
        return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    function formatDate(dateString) {
        var date = new Date(dateString);
        var months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
        return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    }

    function formatTime(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function escapeHtml(text) {
        if (!text) return '';
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function getCategoryIcon(category) {
        var icons = {
            'python': 'fab fa-python',
            'programming': 'fas fa-code',
            'design': 'fas fa-palette',
            'database': 'fas fa-database',
            'web': 'fas fa-globe',
            'other': 'fas fa-folder'
        };
        return icons[category] || 'fas fa-book';
    }

    function getCategoryColor(category) {
        var colors = {
            'python': 'python',
            'programming': 'web',
            'design': 'design',
            'database': 'database',
            'web': 'web',
            'other': ''
        };
        return colors[category] || '';
    }

    $('#mobile-menu-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');
    });

    $('.nav-link, .mobile-nav-link').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).data('tab');
        switchTab(tab);
        $('#mobile-menu').removeClass('active');
    });

    $('[data-goto]').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).data('goto');
        switchTab(tab);
    });

    function switchTab(tabName) {

        $('.nav-link, .mobile-nav-link').removeClass('active');
        $('[data-tab="' + tabName + '"]').addClass('active');

        $('.tab-content').removeClass('active');
        $('#' + tabName).addClass('active');

        switch(tabName) {
            case 'home':
                loadHomeCourses();
                break;
            case 'courses':
                loadCourses();
                break;
            case 'tests':
                loadTests();
                break;
            case 'results':
                loadResults();
                break;
            case 'discussion':
                loadComments();
                loadCoursesForDropdown();
                break;
        }
    }

    function loadHomeCourses() {
        var courses = getData('courses') || PRESET_COURSES;
        var html = '';

        $.each(courses.slice(0, 3), function(index, course) {
            var categoryClass = getCategoryColor(course.category);
            var icon = course.icon || getCategoryIcon(course.category);

            html += 
                '<div class="course-card">' +
                    '<div class="course-card-image ' + categoryClass + '">' +
                        '<i class="' + icon + '"></i>' +
                        '<span class="course-badge">' + course.materials.length + ' materiale</span>' +
                    '</div>' +
                    '<div class="course-card-body">' +
                        '<h3>' + escapeHtml(course.title) + '</h3>' +
                        '<p>' + escapeHtml(course.description) + '</p>' +
                        '<div class="course-meta">' +
                            '<span><i class="fas fa-video"></i> ' + course.materials.filter(function(m) { return m.type === 'video'; }).length + ' video</span>' +
                            '<span><i class="fas fa-file"></i> ' + course.materials.filter(function(m) { return m.type === 'document'; }).length + ' dokumente</span>' +
                        '</div>' +
                        '<div class="course-card-actions">' +
                            '<button class="btn btn-primary btn-small view-course" data-id="' + course.id + '">Shiko Kursin</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        });

        $('#home-courses').html(html);
    }

    function loadCourses() {
        var courses = getData('courses') || PRESET_COURSES;
        renderCourses(courses);
    }

    function renderCourses(courses) {
        var $container = $('#courses-list');

        if (courses.length === 0) {
            $container.html(
                '<div class="empty-state">' +
                    '<i class="fas fa-book-open"></i>' +
                    '<h3>Nuk ka kurse ende</h3>' +
                    '<p>Klikoni "Krijo Kurs" për të shtuar kursin e parë</p>' +
                '</div>'
            );
            return;
        }

        var html = '';
        $.each(courses, function(index, course) {
            var categoryClass = getCategoryColor(course.category);
            var icon = course.icon || getCategoryIcon(course.category);
            var videoCount = course.materials.filter(function(m) { return m.type === 'video'; }).length;
            var docCount = course.materials.filter(function(m) { return m.type === 'document'; }).length;

            html += 
                '<div class="course-card">' +
                    '<div class="course-card-image ' + categoryClass + '">' +
                        '<i class="' + icon + '"></i>' +
                        '<span class="course-badge">' + course.materials.length + ' materiale</span>' +
                    '</div>' +
                    '<div class="course-card-body">' +
                        '<h3>' + escapeHtml(course.title) + '</h3>' +
                        '<p>' + escapeHtml(course.description) + '</p>' +
                        '<div class="course-meta">' +
                            '<span><i class="fas fa-video"></i> ' + videoCount + ' video</span>' +
                            '<span><i class="fas fa-file"></i> ' + docCount + ' dokumente</span>' +
                            '<span><i class="fas fa-calendar"></i> ' + formatDate(course.created_at) + '</span>' +
                        '</div>' +
                        '<div class="course-card-actions">' +
                            '<button class="btn btn-primary btn-small view-course" data-id="' + course.id + '"><i class="fas fa-eye"></i> Shiko</button>' +
                            '<button class="btn btn-danger btn-small delete-course" data-id="' + course.id + '"><i class="fas fa-trash"></i></button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        });
        $container.html(html);
    }

    $('#course-search').on('input', function() {
        var query = $(this).val().toLowerCase();
        var courses = getData('courses') || PRESET_COURSES;

        if (query) {
            courses = $.grep(courses, function(c) {
                return c.title.toLowerCase().indexOf(query) !== -1 || 
                       c.description.toLowerCase().indexOf(query) !== -1;
            });
        }
        renderCourses(courses);
    });

    $('#show-create-course').on('click', function() {
        $('#create-course-form').slideDown();
    });

    $('#hide-create-course, #cancel-create-course').on('click', function() {
        $('#create-course-form').slideUp();
        $('#course-form')[0].reset();
    });

    $('#course-form').on('submit', function(e) {
        e.preventDefault();

        var courses = getData('courses') || [];
        var course = {
            id: generateId(),
            title: $('#course-title').val(),
            description: $('#course-description').val(),
            category: $('#course-category').val(),
            icon: getCategoryIcon($('#course-category').val()),
            created_at: new Date().toISOString(),
            materials: []
        };

        courses.push(course);
        setData('courses', courses);

        $('#create-course-form').slideUp();
        $('#course-form')[0].reset();
        loadCourses();
    });

    $(document).on('click', '.view-course', function() {
        var courseId = $(this).data('id');
        viewCourse(courseId);
    });

    function viewCourse(courseId) {
        var courses = getData('courses') || PRESET_COURSES;
        var course = $.grep(courses, function(c) { return c.id === courseId; })[0];

        if (!course) return;

        $('#modal-course-title').html('<i class="' + (course.icon || 'fas fa-book') + '"></i> ' + escapeHtml(course.title));

        var materialsHtml = '';
        if (course.materials.length === 0) {
            materialsHtml = '<div class="empty-state" style="padding:30px;"><i class="fas fa-folder-open"></i><h3>Nuk ka materiale</h3><p>Shtoni materiale të reja në këtë kurs</p></div>';
        } else {
            $.each(course.materials, function(index, material) {
                var iconClass = material.type === 'video' ? 'video' : 'document';
                var icon = material.type === 'video' ? 'fas fa-play-circle' : 'fas fa-file-pdf';

                materialsHtml += 
                    '<div class="material-item">' +
                        '<div class="material-info">' +
                            '<div class="material-icon ' + iconClass + '"><i class="' + icon + '"></i></div>' +
                            '<div class="material-details">' +
                                '<h4>' + escapeHtml(material.title) + '</h4>' +
                                '<span>' + formatDate(material.uploaded_at) + '</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="material-actions">' +
                            '<button class="btn btn-primary btn-small play-video" data-course-id="' + course.id + '" data-material-id="' + material.id + '"><i class="fas fa-play"></i> Shiko</button>' +
                            '<button class="btn btn-danger btn-small delete-material" data-course-id="' + course.id + '" data-material-id="' + material.id + '"><i class="fas fa-trash"></i></button>' +
                        '</div>' +
                    '</div>';
            });
        }

        var comments = getData('comments') || [];
        var courseComments = $.grep(comments, function(c) { return c.course_id === courseId; });
        var commentsHtml = '';
        if (courseComments.length === 0) {
            commentsHtml = '<p style="color:var(--gray-500);text-align:center;padding:20px;">Nuk ka komente për këtë kurs ende.</p>';
        } else {
            $.each(courseComments, function(index, comment) {
                commentsHtml += 
                    '<div class="comment-item" style="margin-bottom:10px;">' +
                        '<div class="comment-header">' +
                            '<span class="comment-author"><i class="fas fa-user"></i> ' + escapeHtml(comment.author) + '</span>' +
                            '<span class="comment-date">' + formatDate(comment.created_at) + '</span>' +
                        '</div>' +
                        '<div class="comment-content">' + escapeHtml(comment.content) + '</div>' +
                    '</div>';
            });
        }

        var html = 
            '<p style="color:var(--gray-600);margin-bottom:20px;">' + escapeHtml(course.description) + '</p>' +
            '<div class="section-header">' +
                '<h3 style="display:flex;align-items:center;gap:10px;"><i class="fas fa-folder-open" style="color:var(--primary);"></i> Materiale</h3>' +
                '<button class="btn btn-primary btn-small show-upload" data-course-id="' + course.id + '"><i class="fas fa-plus"></i> Shto Material</button>' +
            '</div>' +
            '<div class="materials-list">' + materialsHtml + '</div>' +
            '<div id="video-player-container"></div>' +
            '<div style="margin-top:30px;">' +
                '<h3 style="display:flex;align-items:center;gap:10px;margin-bottom:15px;"><i class="fas fa-comments" style="color:var(--primary);"></i> Diskutime</h3>' +
                '<div class="comments-container">' + commentsHtml + '</div>' +
            '</div>';

        $('#course-detail-content').html(html);
        $('#course-detail-modal').fadeIn();
    }

    $('#close-course-modal').on('click', function() {
        $('#course-detail-modal').fadeOut();
    });

    $('.modal-overlay').on('click', function() {
        $(this).closest('.modal').fadeOut();
    });

    $(document).on('click', '.delete-course', function() {
        if (!confirm('Jeni i sigurt se doni të fshini këtë kurs?')) return;

        var courseId = $(this).data('id');
        var courses = getData('courses') || [];
        courses = $.grep(courses, function(c) { return c.id !== courseId; });
        setData('courses', courses);
        loadCourses();
    });

    $(document).on('click', '.show-upload', function() {
        var courseId = $(this).data('course-id');
        $('#upload-course-id').val(courseId);
        $('#material-title').val('');
        $('#material-file').val('');
        $('#video-preview').hide();
        $('#upload-modal').fadeIn();
    });

    $('#close-upload-modal, #cancel-upload').on('click', function() {
        $('#upload-modal').fadeOut();
    });

    $('#material-file').on('change', function() {
        var file = this.files[0];
        if (file && file.type.startsWith('video/')) {
            var url = URL.createObjectURL(file);
            $('#preview-video').attr('src', url);
            $('#video-preview').show();
            $('#material-type').val('video');
        } else {
            $('#video-preview').hide();
            if (file) {
                $('#material-type').val('document');
            }
        }
    });

    $('#upload-form').on('submit', function(e) {
        e.preventDefault();

        var courseId = $('#upload-course-id').val();
        var title = $('#material-title').val();
        var type = $('#material-type').val();
        var file = $('#material-file')[0].files[0];

        if (!file) return;

        var reader = new FileReader();
        reader.onload = function(event) {
            var courses = getData('courses') || [];
            var course = $.grep(courses, function(c) { return c.id === courseId; })[0];

            if (course) {
                var material = {
                    id: generateId(),
                    title: title,
                    type: type,
                    filename: file.name,
                    dataUrl: event.target.result,
                    uploaded_at: new Date().toISOString()
                };

                course.materials.push(material);
                setData('courses', courses);

                $('#upload-modal').fadeOut();
                viewCourse(courseId);
            }
        };
        reader.readAsDataURL(file);
    });

    $(document).on('click', '.play-video', function() {
        var courseId = $(this).data('course-id');
        var materialId = $(this).data('material-id');
        var courses = getData('courses') || [];
        var course = $.grep(courses, function(c) { return c.id === courseId; })[0];
        var material = $.grep(course.materials, function(m) { return m.id === materialId; })[0];

        if (material && material.dataUrl) {
            $('#video-player-container').html(
                '<div class="video-container">' +
                    '<video controls autoplay>' +
                        '<source src="' + material.dataUrl + '">' +
                        'Shfletuesi juaj nuk mbështet elementin video.' +
                    '</video>' +
                '</div>'
            );
        } else {
            alert('Video nuk është i disponueshëm. Ju lutem ngarkoni videon përsëri.');
        }
    });
    $(document).on('click', '.delete-material', function() {
        if (!confirm('Jeni i sigurt se doni të fshini këtë material?')) return;

        var courseId = $(this).data('course-id');
        var materialId = $(this).data('material-id');

        var courses = getData('courses') || [];
        var course = $.grep(courses, function(c) { return c.id === courseId; })[0];

        if (course) {
            course.materials = $.grep(course.materials, function(m) { return m.id !== materialId; });
            setData('courses', courses);
            viewCourse(courseId);
        }
    });

    var currentTestId = null;
    var testTimer = null;
    var timeRemaining = 0;

    function loadTests() {
        var tests = getData('tests') || PRESET_TESTS;
        renderTests(tests);
    }

    function renderTests(tests) {
        var $container = $('#tests-list');

        if (tests.length === 0) {
            $container.html(
                '<div class="empty-state">' +
                    '<i class="fas fa-clipboard-list"></i>' +
                    '<h3>Nuk ka teste ende</h3>' +
                    '<p>Testet do të shfaqen këtu kur të disponohen</p>' +
                '</div>'
            );
            return;
        }

        var html = '';
        $.each(tests, function(index, test) {
            var timeInfo = test.time_limit > 0 
                ? '<span><i class="fas fa-clock"></i> ' + test.time_limit + ' min</span>' 
                : '<span><i class="fas fa-infinity"></i> Pa limit</span>';

            var courseName = '';
            if (test.course_id) {
                var courses = getData('courses') || PRESET_COURSES;
                var course = $.grep(courses, function(c) { return c.id === test.course_id; })[0];
                if (course) {
                    courseName = '<span class="course-tag"><i class="fas fa-book"></i> ' + escapeHtml(course.title) + '</span>';
                }
            }

            html += 
                '<div class="test-card">' +
                    '<div class="test-card-body">' +
                        '<h3>' + escapeHtml(test.title) + '</h3>' +
                        '<p>' + escapeHtml(test.description) + '</p>' +
                        '<div class="test-meta">' +
                            '<span><i class="fas fa-question-circle"></i> ' + test.questions.length + ' pyetje</span>' +
                            timeInfo +
                        '</div>' +
                        (courseName ? '<div style="margin-bottom:15px;">' + courseName + '</div>' : '') +
                        '<div class="test-card-actions">' +
                            '<button class="btn btn-success start-test" data-id="' + test.id + '"><i class="fas fa-play"></i> Fillo Testin</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        });
        $container.html(html);
    }

    $(document).on('click', '.start-test', function() {
        var testId = $(this).data('id');
        startTest(testId);
    });

    function startTest(testId) {
        var tests = getData('tests') || PRESET_TESTS;
        var test = $.grep(tests, function(t) { return t.id === testId; })[0];

        if (!test) return;

        currentTestId = testId;
        var studentName = $('#username').val() || 'Student';

        $('#test-modal-title').html('<i class="fas fa-clipboard-check"></i> ' + escapeHtml(test.title));

        var timerHtml = '';
        if (test.time_limit > 0) {
            timeRemaining = test.time_limit * 60;
            timerHtml = '<div class="test-timer" id="test-timer"><i class="fas fa-clock"></i> Koha e mbetur: <span id="timer-display">' + formatTime(timeRemaining) + '</span></div>';
            startTestTimer();
        }

        var html = 
            '<p style="color:var(--gray-600);margin-bottom:20px;">' + escapeHtml(test.description) + '</p>' +
            '<div class="test-info">' +
                '<div class="test-info-item"><i class="fas fa-question-circle"></i> ' + test.questions.length + ' pyetje</div>' +
                '<div class="test-info-item"><i class="fas fa-user"></i> ' + escapeHtml(studentName) + '</div>' +
                (test.time_limit > 0 ? '<div class="test-info-item"><i class="fas fa-clock"></i> ' + test.time_limit + ' minuta</div>' : '<div class="test-info-item"><i class="fas fa-infinity"></i> Pa limit kohor</div>') +
            '</div>' +
            timerHtml +
            '<form id="take-test-form">';

        $.each(test.questions, function(index, q) {
            html += 
                '<div class="test-question">' +
                    '<h4><span class="question-number">' + (index + 1) + '</span> ' + escapeHtml(q.question) + '</h4>' +
                    '<div class="options">';

            $.each(q.options, function(optIndex, opt) {
                var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
                html += 
                    '<label class="option">' +
                        '<input type="radio" name="answer_' + index + '" value="' + optIndex + '" required>' +
                        '<span class="option-letter">' + letters[optIndex] + '</span>' +
                        '<span>' + escapeHtml(opt) + '</span>' +
                    '</label>';
            });

            html += '</div></div>';
        });

        html += 
                '<div class="form-actions">' +
                    '<button type="submit" class="btn btn-success btn-large"><i class="fas fa-paper-plane"></i> Dërgo Përgjigjet</button>' +
                '</div>' +
            '</form>';

        $('#test-content').html(html);
        $('#test-modal').fadeIn();
    }

    $(document).on('click', '.test-question .option', function() {
        $(this).siblings('.option').removeClass('selected');
        $(this).addClass('selected');
    });

    function startTestTimer() {
        if (testTimer) clearInterval(testTimer);

        testTimer = setInterval(function() {
            timeRemaining--;
            var $display = $('#timer-display');
            var $timerContainer = $('#test-timer');

            if ($display.length) {
                $display.text(formatTime(timeRemaining));
            }

            if (timeRemaining <= 60 && $timerContainer.length) {
                $timerContainer.addClass('warning');
            }

            if (timeRemaining <= 0) {
                clearInterval(testTimer);
                alert('Koha ka mbaruar! Testi do të dërgohet automatikisht.');
                $('#take-test-form').trigger('submit');
            }
        }, 1000);
    }

    $('#close-test-modal').on('click', function() {
        $('#test-modal').fadeOut();
        if (testTimer) {
            clearInterval(testTimer);
            testTimer = null;
        }
    });

    $(document).on('submit', '#take-test-form', function(e) {
        e.preventDefault();

        if (testTimer) {
            clearInterval(testTimer);
            testTimer = null;
        }

        var answers = {};
        $('#take-test-form input[type="radio"]:checked').each(function() {
            var name = $(this).attr('name');
            var index = name.replace('answer_', '');
            answers[index] = parseInt($(this).val());
        });

        var tests = getData('tests') || PRESET_TESTS;
        var test = $.grep(tests, function(t) { return t.id === currentTestId; })[0];

        if (!test) return;

        var studentName = $('#username').val() || 'Student';
        var correct = 0;
        var total = test.questions.length;
        var details = [];

        $.each(test.questions, function(index, question) {
            var userAnswer = answers[index] !== undefined ? answers[index] : null;
            var isCorrect = userAnswer === question.correct_answer;

            if (isCorrect) correct++;

            details.push({
                question: question.question,
                user_answer: userAnswer,
                correct_answer: question.correct_answer,
                is_correct: isCorrect,
                options: question.options
            });
        });

        var score = total > 0 ? Math.round((correct / total) * 100) : 0;

        var result = {
            id: generateId(),
            test_id: currentTestId,
            test_title: test.title,
            student_name: studentName,
            score: score,
            correct: correct,
            total: total,
            details: details,
            submitted_at: new Date().toISOString()
        };

        var results = getData('results') || [];
        results.push(result);
        setData('results', results);

        $('#test-modal').fadeOut();
        showTestResult(result);
    });

    function showTestResult(result) {
        var scoreClass = result.score >= 70 ? 'score-high' : (result.score >= 50 ? 'score-medium' : 'score-low');
        var emoji = result.score >= 70 ? '🎉' : (result.score >= 50 ? '👍' : '📚');
        var message = result.score >= 70 ? 'Shkëlqyer!' : (result.score >= 50 ? 'Mirë!' : 'Mëso më shumë!');

        var html = 
            '<div style="text-align:center;padding:30px 0;">' +
                '<div style="font-size:4rem;margin-bottom:15px;">' + emoji + '</div>' +
                '<div class="score-badge ' + scoreClass + '" style="font-size:2.5rem;padding:20px 50px;display:inline-block;">' +
                    result.score + '%' +
                '</div>' +
                '<h3 style="margin-top:15px;color:var(--gray-700);">' + message + '</h3>' +
                '<p style="color:var(--gray-500);">' + result.correct + ' nga ' + result.total + ' pyetje të sakta</p>' +
            '</div>' +
            '<h4 style="margin:25px 0 15px;display:flex;align-items:center;gap:10px;"><i class="fas fa-list-check" style="color:var(--primary);"></i> Detajet e Përgjigjeve</h4>' +
            '<div class="result-details">';

        $.each(result.details, function(index, detail) {
            var itemClass = detail.is_correct ? 'correct' : 'incorrect';
            var statusIcon = detail.is_correct ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>';
            var userAnswerText = detail.user_answer !== null 
                ? detail.options[detail.user_answer] 
                : 'Nuk u përgjigj';

            html += 
                '<div class="result-detail-item ' + itemClass + '">' +
                    '<div class="status-icon">' + statusIcon + '</div>' +
                    '<div class="result-detail-content">' +
                        '<h5>Pyetja ' + (index + 1) + '</h5>' +
                        '<p>' + escapeHtml(detail.question) + '</p>' +
                        '<p><strong>Përgjigja juaj:</strong> ' + escapeHtml(userAnswerText) + '</p>' +
                        (!detail.is_correct ? '<p><strong>Përgjigja e saktë:</strong> ' + escapeHtml(detail.options[detail.correct_answer]) + '</p>' : '') +
                    '</div>' +
                '</div>';
        });

        html += 
            '</div>' +
            '<div class="form-actions" style="margin-top:25px;justify-content:center;">' +
                '<button class="btn btn-primary btn-large close-result-btn"><i class="fas fa-home"></i> Kthehu</button>' +
            '</div>';

        $('#result-content').html(html);
        $('#result-modal').fadeIn();
    }

    $(document).on('click', '#close-result-modal, .close-result-btn', function() {
        $('#result-modal').fadeOut();
        loadResults();
    });

    function loadResults() {
        var results = getData('results') || [];
        renderResults(results);
    }

    function renderResults(results) {
        var $summary = $('#results-summary');
        var $container = $('#results-list');

        if (results.length === 0) {
            $summary.html('');
            $container.html(
                '<div class="empty-state">' +
                    '<i class="fas fa-chart-bar"></i>' +
                    '<h3>Nuk ka rezultate ende</h3>' +
                    '<p>Kryeni testet për të parë rezultatet këtu</p>' +
                '</div>'
            );
            return;
        }

        var totalTests = results.length;
        var passed = $.grep(results, function(r) { return r.score >= 50; }).length;
        var failed = totalTests - passed;
        var avgScore = Math.round(results.reduce(function(sum, r) { return sum + r.score; }, 0) / totalTests);

        $summary.html(
            '<div class="summary-card">' +
                '<div class="icon total"><i class="fas fa-clipboard-list"></i></div>' +
                '<div class="number">' + totalTests + '</div>' +
                '<div class="label">Teste të Kryera</div>' +
            '</div>' +
            '<div class="summary-card">' +
                '<div class="icon passed"><i class="fas fa-check-circle"></i></div>' +
                '<div class="number">' + passed + '</div>' +
                '<div class="label">Kaluar</div>' +
            '</div>' +
            '<div class="summary-card">' +
                '<div class="icon failed"><i class="fas fa-times-circle"></i></div>' +
                '<div class="number">' + failed + '</div>' +
                '<div class="label">Dështuar</div>' +
            '</div>' +
            '<div class="summary-card">' +
                '<div class="icon avg"><i class="fas fa-percentage"></i></div>' +
                '<div class="number">' + avgScore + '%</div>' +
                '<div class="label">Mesatarja</div>' +
            '</div>'
        );

        results.sort(function(a, b) {
            return new Date(b.submitted_at) - new Date(a.submitted_at);
        });

        var html = 
            '<table class="results-table">' +
                '<thead>' +
                    '<tr>' +
                        '<th>Studenti</th>' +
                        '<th>Testi</th>' +
                        '<th>Rezultati</th>' +
                        '<th>Përgjigje</th>' +
                        '<th>Data</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>';

        $.each(results, function(index, result) {
            var scoreClass = result.score >= 70 ? 'score-high' : (result.score >= 50 ? 'score-medium' : 'score-low');

            html += 
                '<tr>' +
                    '<td><strong>' + escapeHtml(result.student_name) + '</strong></td>' +
                    '<td>' + escapeHtml(result.test_title) + '</td>' +
                    '<td><span class="score-badge ' + scoreClass + '">' + result.score + '%</span></td>' +
                    '<td>' + result.correct + ' / ' + result.total + '</td>' +
                    '<td>' + formatDate(result.submitted_at) + '</td>' +
                '</tr>';
        });

        html += '</tbody></table>';
        $container.html(html);
    }

    function loadComments() {
        var comments = getData('comments') || [];
        renderComments(comments);
    }

    function renderComments(comments) {
        var $container = $('#comments-list');

        var filter = $('.filter-btn.active').data('filter') || 'all';
        if (filter === 'general') {
            comments = $.grep(comments, function(c) { return !c.course_id; });
        } else if (filter === 'course') {
            comments = $.grep(comments, function(c) { return c.course_id; });
        }

        if (comments.length === 0) {
            $container.html(
                '<div class="empty-state">' +
                    '<i class="fas fa-comments"></i>' +
                    '<h3>Nuk ka komente</h3>' +
                    '<p>Jeni i pari që do të komentojë!</p>' +
                '</div>'
            );
            return;
        }

        comments.sort(function(a, b) {
            return new Date(b.created_at) - new Date(a.created_at);
        });

        var courses = getData('courses') || PRESET_COURSES;
        var html = '';

        $.each(comments, function(index, comment) {
            var courseTag = '';
            if (comment.course_id) {
                var course = $.grep(courses, function(c) { return c.id === comment.course_id; })[0];
                if (course) {
                    courseTag = '<span class="comment-course-tag"><i class="fas fa-book"></i> ' + escapeHtml(course.title) + '</span>';
                }
            }

            html += 
                '<div class="comment-item">' +
                    '<div class="comment-header">' +
                        '<div class="comment-user">' +
                            '<div class="comment-user-avatar"><i class="fas fa-user"></i></div>' +
                            '<div class="comment-user-info">' +
                                '<h4>' + escapeHtml(comment.author) + '</h4>' +
                                '<span>' + formatDate(comment.created_at) + '</span>' +
                            '</div>' +
                        '</div>' +
                        courseTag +
                    '</div>' +
                    '<div class="comment-content">' + escapeHtml(comment.content) + '</div>' +
                    '<div class="comment-actions">' +
                        '<button class="btn btn-danger btn-small delete-comment" data-id="' + comment.id + '"><i class="fas fa-trash"></i> Fshi</button>' +
                    '</div>' +
                '</div>';
        });
        $container.html(html);
    }

    $('.filter-btn').on('click', function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        loadComments();
    });

    function loadCoursesForDropdown() {
        var courses = getData('courses') || PRESET_COURSES;
        var html = '<option value="">-- Diskutim i përgjithshëm --</option>';
        $.each(courses, function(index, course) {
            html += '<option value="' + course.id + '">' + escapeHtml(course.title) + '</option>';
        });
        $('#comment-course').html(html);
    }

    $('#submit-comment').on('click', function() {
        var content = $('#comment-content').val().trim();
        if (!content) {
            alert('Ju lutem shkruani një mesazh');
            return;
        }

        var comments = getData('comments') || [];
        var comment = {
            id: generateId(),
            content: content,
            author: $('#username').val() || 'Anonim',
            course_id: $('#comment-course').val() || null,
            created_at: new Date().toISOString()
        };

        comments.push(comment);
        setData('comments', comments);

        $('#comment-content').val('');
        $('#comment-course').val('');
        loadComments();
    });

    $(document).on('click', '.delete-comment', function() {
        if (!confirm('Jeni i sigurt se doni të fshini këtë koment?')) return;

        var commentId = $(this).data('id');
        var comments = getData('comments') || [];
        comments = $.grep(comments, function(c) { return c.id !== commentId; });
        setData('comments', comments);
        loadComments();
    });

    initPresetData();
    loadHomeCourses();

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('.modal').fadeOut();
            if (testTimer) {
                clearInterval(testTimer);
                testTimer = null;
            }
        }
    });
});
