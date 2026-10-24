// //In this page some changes done by Jitendra 
// import React from 'react';
// const English = () => {
//   return (
//     <div style={{ backgroundColor: "aqua", color: "black",marginTop:"200px",textAlign:"center" }}>
      
//       This is English Page
    
//     </div>
//   )
// }
// export default English

import React from 'react';

const English = () => {
  const syllabus = [
    {
      title: 'Grammar',
      topics: [
        'Nouns',
        'Pronouns',
        'Verbs',
        'Adjectives',
        'Articles: A, An, The',
        'Singular and Plural',
        'Opposite Words',
        'Prepositions',
        'Punctuation'
      ]
    },
    {
      title: 'Reading',
      topics: [
        'Short Stories',
        'Reading Comprehension',
        'Picture Reading'
      ]
    },
    {
      title: 'Writing',
      topics: [
        'Sentence Formation',
        'Paragraph Writing',
        'Picture Composition',
        'Make Sentences'
      ]
    },
    {
      title: 'Vocabulary',
      topics: [
        'Synonyms and Antonyms',
        'Rhyming Words',
        'Spellings and Dictation'
      ]
    },
    {
      title: 'Literature',
      topics: [
        'Stories and Poems',
        'Questions and Answers',
        'Word Meanings'
      ]
    }
  ];

  return (
    <div className="english-syllabus">
      <h1>Class 2 English Syllabus</h1>

      {syllabus.map((section, index) => (
        <div className="syllabus-section" key={index}>
          <h2>{section.title}</h2>
          <ul>
            {section.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default English;
