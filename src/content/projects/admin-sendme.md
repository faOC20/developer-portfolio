---
dataId: '1'
title: 'Admin Sendme - Management dashboard'
description: 'Created from scratch, using React and Tailwind CSS, Integrated with a backend based on Node JS and SQLite'
mockup: '@images/sendme/sendme-mockup.avif'
shortCuts: 
    Frontend: 
        - React 
        - Zustand
        - Javascript
    Backend:
        - Node js
        - Express js
        - SQLite
        - Real Time Amazon Data by OpenWeb Ninja
    Deployment:
        - Vercel
        - Turso SQLite
    Preview: 
        - ['Dashboard-page', '@images/adminSendme/sendme-homepage.avif']
        - ['Order-page', '@images/adminSendme/admin-order.avif']
    Resources: 
        - [Project details, '/project/admin-sendme']
---


<h1 class='text-5xl'>Admin Sendme – Orders Management</h1>

<strong id='introduction' class='text-xl'>Introduction</strong>

Admin Sendme is the administrative companion to the Sendme web application, designed to manage customer orders and streamline decision-making for Milenium Manía C.A., a Venezuelan company specializing in international product shipments.

Built to address the operational challenges of e-commerce in underserved regions, Admin Sendme empowers staff to monitor, validate, and act on customer orders with precision. Operating from Cumaná, Sucre State, the company previously relied on manual tracking and fragmented communication, leading to inefficiencies and data loss. This system centralizes order data, automates workflows, and enhances transparency for both staff and customers.

The application enables administrators to:

- View and manage incoming orders.
- Track payment status and shipping readiness.
- Collect customer data for logistics planning.
- Generate reports for operational insights.

---

<strong id='Frontend' class='text-xl'>Frontend Technologies and Tools</strong>

- Figma  
- React  
- JavaScript  
- Zustand  
- Astro  

The user interface was designed in Figma to prioritize clarity and responsiveness. Key features include:

- A modular dashboard for navigating between order views, customer profiles, and system tools.  
- Real-time updates on order status and payment validation.  
- Interactive tables for filtering, sorting, and editing order data.  
- Responsive layouts for desktop and mobile use.  

React powers the dynamic components, while Zustand handles state management across modules. Astro ensures fast rendering and modular architecture for maintainability.

---

<strong id='Backend' class='text-xl'>Backend Technologies</strong>

- Node.js  
- Express  
- SQLite  
- Turso  

The backend is built with Node.js and Express, following a modular architecture. It uses SQLite for relational storage, deployed via Turso for edge scalability. Middleware ensures secure data validation and API communication.

| Relationship                           | Type                     |
|----------------------------------------|--------------------------|
| Pedido → Usuario                       | Many to One              |
| Pedido → Direccion                     | Many to One              |
| Pedido → Telefono                      | Many to One              |
| Pedido → Estado                        | Many to One              |
| Producto → Pedido                      | Many to One              |
| Direccion → Ciudad                     | Many to One              |
| Direccion → Usuario                    | Many to One              |
| Direccion → Municipio                  | Many to One              |
| Municipio → Ciudad                     | Many to One              |
| Telefono → Usuario                     | Many to One              |

<a href='https://dbdiagram.io/d/sendme-688e3d01cca18e685cf30925' target='__blank' class='text-theme-primary-blue'>Click to see detailed database</a>

---

<strong id='Deployment' class='text-xl'>Cloud Deployment Technologies</strong>

- Vercel  
- Firebase  
- Turso  
- DB Browser for SQLite  

Admin Sendme was deployed on Vercel during development and testing. Turso was selected for its edge database capabilities, enabling fast, distributed access to SQLite instances. Firebase serves as the storage solution for product images, providing visual references that assist administrators in identifying and managing items more efficiently. This cloud setup ensures high availability, performance, and scalability across regions.

---

Admin Sendme is the core administrative tool for managing customer orders placed through the Sendme web app. It equips staff with the data and tools needed to make informed decisions about shipping logistics, customer communication, and operational planning.



<strong id='Preview' class='text-xl'>
    System Page Overview
</strong>

This application is structured around a set of functional pages, each designed to streamline operations and provide full administrative control. From real-time dashboards to financial reconciliation tools, every section plays a key role in maintaining transparency, efficiency, and traceability throughout the client lifecycle. Below is a breakdown of the system’s core pages and their respective roles.

<div id="Dashboard-page">
</div>

![Sendme web, Dashboard page screenshot](@images/adminSendme/admin-dashboard.avif)
> Admin sendme - Dashboard page.

<div id="Order-page">
</div>

![Sendme web, Order page screenshot](@images/adminSendme/admin-order.avif)
> Sendme web - Order page.









