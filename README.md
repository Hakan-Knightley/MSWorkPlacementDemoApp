# Campus Equipment Hub

A university-only marketplace where students can safely borrow and lend equipment such as calculators, cameras, soldering kits, laptops, and drones.

## Product Goal

Help students access expensive equipment that would otherwise sit unused, while giving owners confidence that items, borrowers, and deposits are managed responsibly.

## Core Features

- **Borrow equipment:** Students browse available items, view the rental terms, request dates, and submit a borrow request.
- **Lend equipment:** Students list equipment, add photos and condition details, set availability, and choose a deposit amount.
- **Verified university accounts:** Users sign up with a university email or approved single sign-on. Only verified students can borrow or lend.
- **Deposit system:** A deposit is authorised before a handover, held during the loan, and returned when the item is marked as safely returned. The process must include a clear dispute path.
- **Trust and accountability:** Profiles show verification status, reviews, completed loans, and a history of active requests.
- **Handover tracking:** Both parties confirm collection and return, with timestamps, condition notes, and optional photos.

## MVP Scope

The first release should support one university and include:

1. Account registration and university verification.
2. Equipment catalogue with search, categories, availability, location, and deposit.
3. Equipment listing and editing for lenders.
4. Borrow requests with start and end dates.
5. Request approval or rejection by the lender.
6. Deposit status tracking using a payment provider sandbox.
7. Collection and return confirmations.
8. Ratings, basic reporting, and an operations/admin view.

### Out of Scope for the MVP

- Multi-university support.
- Cash payments or cash deposits.
- Automated damage assessment.
- Delivery between students.
- Native mobile apps.

## Main User Journeys

### Borrower

1. Create an account with a university email.
2. Complete verification and view the catalogue.
3. Filter equipment by category, dates, location, and deposit.
4. Open an item, review its condition and lender rules, then request dates.
5. Authorise the deposit and wait for lender approval.
6. Confirm collection, use the equipment, and confirm its return.
7. Receive the deposit back and review the lender.

### Lender

1. Sign in with a verified university account.
2. Add equipment photos, description, category, condition, availability, and deposit.
3. Review incoming requests and approve or reject them.
4. Confirm collection and record the item's condition.
5. Confirm return, release the deposit, and review the borrower.

### Operations/Admin

1. Review verification exceptions, reports, disputes, and flagged listings.
2. Manage users, equipment categories, and prohibited items.
3. Hold or release deposits according to the dispute process.
4. Audit loan activity and produce basic usage and incident reports.

## Work Allocation

### Project Manager

- Define the MVP backlog, milestones, acceptance criteria, and definition of done.
- Confirm the target university, launch assumptions, policies, and success measures.
- Coordinate dependencies between design, engineering, operations, and specialist work.
- Run stand-ups, planning, reviews, risk tracking, and stakeholder updates.
- Maintain the decision log and ensure the team tests the highest-risk assumptions early.

**Key deliverables:** project plan, prioritised backlog, risk register, acceptance criteria, release checklist, and launch report.

### Solutions Engineer

- Design the technical architecture, data model, API contracts, and deployment approach.
- Build authentication and university-account verification.
- Implement equipment listings, availability, borrow requests, loan states, and user profiles.
- Integrate the payment provider's sandbox for deposit authorisation and release.
- Add role-based access for students, lenders, and operations staff.
- Add validation, error handling, audit logs, automated tests, and monitoring.

**Key deliverables:** architecture diagram, working application, database schema, API documentation, test suite, deployment pipeline, and technical handover.

### Solutions Specialist

- Research student and lender needs through interviews, surveys, or campus observation.
- Define requirements for verification, deposits, handovers, cancellations, damage, and disputes.
- Document business rules and edge cases for engineering and operations.
- Create realistic sample data and support user acceptance testing.
- Check that the solution fits university policies, safeguarding expectations, and accessibility needs.

**Key deliverables:** research summary, personas, requirements, user stories, business rules, edge-case catalogue, UAT scripts, and feedback summary.

### UX/UI Designer

- Design the information architecture and end-to-end borrower and lender journeys.
- Create wireframes and high-fidelity screens for onboarding, catalogue, item details, listing creation, requests, deposits, handovers, and disputes.
- Establish a small accessible design system for type, colour, spacing, forms, statuses, and responsive layouts.
- Prototype the riskiest flows and test them with students.
- Provide engineering-ready designs, content, states, and responsive specifications.

**Key deliverables:** journey maps, wireframes, clickable prototype, UI designs, component guidance, accessibility review, and usability-test findings.

### Operations

- Define verification, handover, deposit, cancellation, damage, and dispute procedures.
- Create rules for acceptable equipment, prohibited items, minimum listing information, and identity checks.
- Establish support channels, response targets, escalation routes, and incident handling.
- Prepare admin workflows for flagged users, overdue loans, failed payments, and disputes.
- Plan the pilot, campus communications, onboarding, training, and post-launch review.

**Key deliverables:** operating handbook, policy and dispute matrix, support scripts, admin checklist, pilot plan, training material, and launch communications.

## Suggested Delivery Phases

### Phase 1: Discover and Define

- Agree the target university, MVP boundaries, policies, and success metrics.
- Interview borrowers, lenders, and operations staff.
- Confirm deposit, verification, privacy, accessibility, and safeguarding requirements.

### Phase 2: Design and Validate

- Map the journeys and prototype the catalogue, request, deposit, and handover flows.
- Test the prototype with students and revise confusing or risky steps.
- Finalise the data model, technical architecture, and operational procedures.

### Phase 3: Build the MVP

- Implement authentication, catalogue, listings, requests, deposit sandbox, and admin tools.
- Build responsive interfaces from the validated designs.
- Add automated tests, auditability, accessibility checks, and clear empty/loading/error states.

### Phase 4: Pilot and Improve

- Launch with a small group of verified students and a limited equipment set.
- Monitor completion rates, failed requests, deposit issues, overdue returns, and support demand.
- Fix critical issues, refine procedures, and decide whether the service is ready to expand.

## Success Measures

- Percentage of sign-ups successfully verified.
- Number of active equipment listings and completed loans.
- Borrow request approval and completion rates.
- Median time from request to collection.
- Deposit return rate and dispute resolution time.
- User satisfaction, repeat usage, and reported incidents.

## Important Considerations

- Store only the personal data required for verification and operation, with clear retention rules.
- Never store payment card details directly; use a reputable payment provider.
- Make deposit status, cancellation terms, damage rules, and dispute deadlines visible before approval.
- Design for keyboard use, screen readers, colour contrast, and mobile screens.
- Keep an audit trail for verification, approvals, handovers, deposit changes, and disputes.

## Definition of Done

The MVP is ready for pilot when the five core journeys work on mobile and desktop, critical paths have automated coverage, operations can resolve common issues, accessibility checks have passed, payment actions use a sandbox, and a small group of verified students has completed a full borrow-and-return test.