// ============================================
// Elevate Lawrence Volleyball Club — Agreement Forms
// Paste into script.google.com and run createBothForms()
// ============================================

function createBothForms() {
  createPlayerExpectationsForm();
  createParentExpectationsForm();
}

// ============================================
// PLAYER EXPECTATIONS AGREEMENT
// ============================================
function createPlayerExpectationsForm() {
  var form = FormApp.create('Elevate Lawrence Volleyball Club — Player Expectations Agreement');
  form.setDescription(
    'Welcome to Elevate Lawrence Volleyball Club! Before the season begins, we ask every player to read and agree to the expectations below. ' +
    'These are the standards we hold ourselves to as a team. By signing this form, you are committing to being the best teammate, athlete, and person you can be.\n\n' +
    'Our core values: Energy · Leadership · Effort · Versatility · Agility · Teamwork · Encouragement'
  );
  form.setConfirmationMessage('Thank you! We are excited to have you on the team. See you on the court!');
  form.setIsQuiz(false);

  // --- Section 1: Player Info ---
  form.addTextItem()
    .setTitle('Player Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Team (e.g., 12U or 15U)')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Parent/Guardian Name')
    .setRequired(true);

  // --- Section 2: Effort & Attitude ---
  form.addSectionHeaderItem()
    .setTitle('Effort & Attitude')
    .setHelpText('How you show up matters just as much as how you play.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I will give my best effort at every practice and every game.',
      'I will come to practice ready to work — on time, warmed up mentally, and with a positive attitude.',
      'I understand that mistakes are part of learning and I will not give up on myself or my teammates.',
      'I will push myself outside of my comfort zone and trust the process.'
    ])
    .setRequired(true);

  // --- Section 3: Teamwork & Communication ---
  form.addSectionHeaderItem()
    .setTitle('Teamwork & Communication')
    .setHelpText('We rise together or not at all.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I will encourage my teammates — words matter, and I will build others up.',
      'I will communicate on the court (calling the ball, talking on defense, supporting my teammates).',
      'I will never put down a teammate, opponent, or official — on or off the court.',
      'If I have a concern, I will talk to my coach respectfully and directly.'
    ])
    .setRequired(true);

  // --- Section 4: Commitment & Responsibility ---
  form.addSectionHeaderItem()
    .setTitle('Commitment & Responsibility')
    .setHelpText('Being on a team means others are counting on you.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I will attend all practices and games unless I have communicated an absence to my coach in advance.',
      'I understand that unexcused absences affect the whole team.',
      'I will take care of my gear, my body, and my attitude.',
      'I will represent Elevate Lawrence Volleyball Club with pride — at tournaments, at school, and online.'
    ])
    .setRequired(true);

  // --- Section 5: Coachability ---
  form.addSectionHeaderItem()
    .setTitle('Coachability')
    .setHelpText('The best athletes are the most coachable ones.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I will listen to my coaches and be open to feedback — even when it is hard to hear.',
      'I will try new things when asked, even if they feel uncomfortable at first.',
      'I will ask questions when I do not understand something.',
      'I will focus on what I can control: my effort, my attitude, and my energy.'
    ])
    .setRequired(true);

  // --- Section 6: Signature ---
  form.addSectionHeaderItem()
    .setTitle('Agreement')
    .setHelpText('By typing your name below, you agree to uphold these expectations for the entire season.');

  form.addTextItem()
    .setTitle('Player Signature (type your full name)')
    .setRequired(true);

  form.addDateItem()
    .setTitle('Date')
    .setRequired(true);

  Logger.log('Player form created: ' + form.getEditUrl());
}

// ============================================
// PARENT/GUARDIAN EXPECTATIONS AGREEMENT
// ============================================
function createParentExpectationsForm() {
  var form = FormApp.create('Elevate Lawrence Volleyball Club — Parent/Guardian Expectations Agreement');
  form.setDescription(
    'Thank you for trusting Elevate Lawrence Volleyball Club with your athlete! We believe the best results happen when coaches, players, and parents are all on the same page. ' +
    'Please read the expectations below and sign at the bottom. These help us create the positive, growth-focused environment every player deserves.\n\n' +
    'Our coaching philosophy is built on: positive coaching, effort over outcome, filling emotional tanks, and honoring the game.'
  );
  form.setConfirmationMessage('Thank you! We appreciate your partnership and look forward to a great season together.');
  form.setIsQuiz(false);

  // --- Section 1: Parent Info ---
  form.addTextItem()
    .setTitle('Parent/Guardian Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Player Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Team (e.g., 12U or 15U)')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Best Contact Phone Number')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Best Contact Email')
    .setRequired(true);

  // --- Section 2: Positive Environment ---
  form.addSectionHeaderItem()
    .setTitle('Supporting a Positive Environment')
    .setHelpText('Our athletes perform their best when they feel supported by everyone — coaches, teammates, and parents.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I will model positive behavior at all practices, games, and tournaments.',
      'I will encourage all players on the team — not just my own child.',
      'I will not coach from the sideline or stands during games or practices.',
      'I will refrain from negative comments about players, coaches, opponents, or officials.'
    ])
    .setRequired(true);

  // --- Section 3: Communication ---
  form.addSectionHeaderItem()
    .setTitle('Communication')
    .setHelpText('Clear, respectful communication keeps everything running smoothly.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I will communicate schedule conflicts or absences to the coach as early as possible.',
      'If I have a concern, I will bring it directly to the coach — not to other parents or players.',
      'I will follow the 24-hour rule: I will wait at least 24 hours after a game before raising concerns about playing time or coaching decisions.',
      'I will stay informed by checking the team app and responding to communications promptly.'
    ])
    .setRequired(true);

  // --- Section 4: Commitment ---
  form.addSectionHeaderItem()
    .setTitle('Season Commitment')
    .setHelpText('A full team at every practice and game gives every player the best experience.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I understand this is a season-long commitment and my player is expected to attend all practices and games.',
      'I will make sure my player arrives on time and is picked up promptly.',
      'I understand that tournament schedules may change and I will be flexible when possible.',
      'I will ensure my player has proper gear, water, and nutrition for all volleyball activities.'
    ])
    .setRequired(true);

  // --- Section 5: Trust the Process ---
  form.addSectionHeaderItem()
    .setTitle('Trusting the Coaching Staff')
    .setHelpText('We are committed to developing every player. Some decisions may not make sense in the moment, but they are always made with the athlete\'s long-term growth in mind.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I trust the coaches to make decisions about lineups, positions, and playing time based on what is best for player development and the team.',
      'I understand that equal playing time is not guaranteed, but every player will receive coaching attention and opportunities to grow.',
      'I will support the coaching philosophy of effort over outcome — we celebrate hustle, improvement, and attitude.',
      'I will direct my player back to the coach if they have questions about their role or development.'
    ])
    .setRequired(true);

  // --- Section 6: Financial & Administrative ---
  form.addSectionHeaderItem()
    .setTitle('Financial & Administrative')
    .setHelpText('Keeping the club running smoothly requires everyone\'s cooperation.');

  form.addCheckboxItem()
    .setTitle('I agree to the following:')
    .setChoiceValues([
      'I understand the season fees and payment schedule and will fulfill my financial commitment on time.',
      'I understand that fees are generally non-refundable once the season begins, as they cover shared team expenses.',
      'I will complete all required registration paperwork and waivers before my player participates.'
    ])
    .setRequired(true);

  // --- Section 7: Signature ---
  form.addSectionHeaderItem()
    .setTitle('Agreement')
    .setHelpText('By typing your name below, you agree to uphold these expectations for the entire season.');

  form.addTextItem()
    .setTitle('Parent/Guardian Signature (type your full name)')
    .setRequired(true);

  form.addDateItem()
    .setTitle('Date')
    .setRequired(true);

  Logger.log('Parent form created: ' + form.getEditUrl());
}
