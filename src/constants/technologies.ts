import Turso from '@icons/technologies/turso.astro';
import Firebase from '@icons/technologies/firebase.astro';
import MongoDB from '@icons/technologies/mongodb.astro';
import React from '@icons/technologies/react.astro';
import TypeScript from '@icons/technologies/typescript.astro';
import Node from '@icons/technologies/node.astro';
import MySQL from '@icons/technologies/mysql.astro';
import SQLite from '@icons/technologies/sqlite.astro';
import Python from '@icons/technologies/python.astro';
import Go from '@icons/technologies/go.astro';
import Tailwind from '@icons/technologies/tailwind.astro';
import Astro from '@icons/technologies/astro.astro';
import Html from '@icons/technologies/html.astro';
import Css from '@icons/technologies/css.astro';
import Express from '@icons/technologies/express.astro';

interface Technology {
    category: string;
    techs: {
        name: string;
        icon: any;
        category: string;
    }[];
}


export const TECHNOLOGIES: Technology[] = [
    {
        category: 'Frontend',
        techs: [
            {
                name: 'React',
                icon: React,
                category: 'Frontend'
            },
            {
                name: 'TypeScript',
                icon:  TypeScript,
                category: 'Frontend'
            },
            {
                name: 'Tailwind',
                icon: Tailwind,
                category: 'Frontend'
            },
            {
                name: 'Astro',
                icon: Astro,
                category: 'Frontend'
            },
            {
                name: 'HTML',
                icon: Html,
                category: 'Frontend'
            },
            {
                name: 'CSS',
                icon: Css,
                category: 'Frontend'
            },
            
        ]
    },
    {
        category: 'Backend',
        techs: [
            {
                name: 'Node',
                icon: Node,
                category: 'Backend'
            },
            {
                name: 'Python',
                icon: Python,
                category: 'Backend'
            },
            {
                name: 'Go',
                icon: Go,
                category: 'Backend'
            },
            {
                name: 'Express',
                icon: Express,
                category: 'Backend'
            },
            
        ]
    },
    {
        category: 'Services',
        techs: [
            {
                name: 'Firebase',
                icon: Firebase,
                category: 'Services'
            },
            {
                name: 'MongoDB',
                icon: MongoDB,
                category: 'Services'
            },
            {
                name: 'MySQL',
                icon: MySQL,
                category: 'Services'
            },
            {
                name: 'SQLite',
                icon: SQLite,
                category: 'Services'
            },
            {
                name: 'Turso',
                icon: Turso,
                category: 'Services'
            },
        ]
    }

] as const
