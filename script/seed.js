'use strict'

const db = require('../server/db')
const Campus = require('./server/db/models/campus')
const Student = require('./server/db/models/student')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const middleEarth = await Campus.create({
    id: 3,
    name: 'Middle Earth',
    address: '1234 Hobbit St.  Shire,  NY 11213',
    description:
      'In ut justo mi. Sed sit amet massa quam. Nunc dignissim, sem a rhoncus imperdiet, quam tortor gravida lectus, non convallis arcu est sit amet nibh. Donec euismod metus posuere pulvinar porttitor. Vestibulum pharetra bibendum dignissim. Fusce nisl enim, lacinia ut neque a, congue lobortis dui.',
    imageUrl: 'https://image.ibb.co/kbqAgL/rivendell.png'
  })

  const oz = await Campus.create({
    id: 2,
    name: 'Oz',
    address: 'Follow the Yellow Brick Road',
    description:
      'Sed tristique leo eleifend accumsan accumsan. Suspendisse eget est mauris. Nulla eu gravida dolor. Fusce eget tempus nunc, vel mollis sem. Pellentesque ornare congue diam, id euismod magna maximus a. Etiam suscipit aliquet mi quis maximus. Pellentesque ut purus a velit aliquet efficitur. ',
    imageUrl: 'https://image.ibb.co/dkLXvf/emerald-city.png'
  })

  const neverland = await Campus.create({
    id: 4,
    name: 'Neverland',
    address: 'Follow the Yellow Brick Road',
    description:
      'Sed tristique leo eleifend accumsan accumsan. Suspendisse eget est mauris. Nulla eu gravida dolor. Fusce eget tempus nunc, vel mollis sem. Pellentesque ornare congue diam, id euismod magna maximus a. Etiam suscipit aliquet mi quis maximus. Pellentesque ut purus a velit aliquet efficitur. ',
    imageUrl: 'https://image.ibb.co/bUxCvf/pirate-ship.png'
  })

  const narnia = await Campus.create({
    id: 1,
    name: 'Narnia',
    address: 'Back of Magical Wardrobe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum vulputate congue. Curabitur volutpat nulla metus, a luctus mauris commodo a. Proin tortor lacus, eleifend in faucibus ac, mollis id est. Praesent tempor nisl elit, in luctus nibh egestas eu. Nunc sagittis dictum augue, vel tempor erat luctus convallis. Nulla eros massa, aliquet nec mauris eu, tempor mollis ante. Pellentesque finibus dignissim imperdiet. Maecenas nulla lorem, euismod in mattis sit amet, condimentum eu velit. Sed vitae dui odio. Aenean diam purus, porta vel ultricies vitae, blandit vel urna. Nulla eu fermentum lectus, pellentesque convallis elit. Vivamus a vestibulum ante, a interdum neque. Pellentesque nec vulputate odio. Etiam id elit pulvinar, tristique turpis in, maximus metus.',
    imageUrl: 'https://image.ibb.co/ca7Z80/narnia.png'
  })
  //students ==================================

  const lucy = await Student.create({
    firstName: 'Lucy',
    lastName: 'Pevensie',
    email: 'lucy_pevensie@gmail.com',
    gpa: 3.9,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/hLC6ML/lucy.png'
  })

  const edmund = await Student.create({
    firstName: 'Edmund',
    lastName: 'Pevensie',
    email: 'ed_pevensie@gmail.com',
    gpa: 3.5,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/dH49af/edmund.png'
  })

  const peter = await Student.create({
    firstName: 'Peter',
    lastName: 'Pevensie',
    email: 'peter_pevensie@gmail.com',
    gpa: 3,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/cUJP80/peter.png'
  })

  const susan = await Student.create({
    firstName: 'Susan',
    lastName: 'Pevensie',
    email: 'susan_pevensie@gmail.com',
    gpa: 4,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/fkBBo0/susan.png'
  })

  const misterTumnus = await Student.create({
    firstName: 'Mister',
    lastName: 'Tumnus',
    email: 'fawn1234@comcast.net',
    gpa: 2.9,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/hNkhvf/mr-tum.png'
  })

  const aslan = await Student.create({
    firstName: 'As',
    lastName: 'Lan',
    email: 'talking_lion@outlook.com',
    gpa: 4,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/kfYP80/aslan.png'
  })

  const dorothy = await Student.create({
    firstName: 'Dorothy',
    lastName: 'Gale',
    email: 'tornado_watcher@gmail.com',
    gpa: 3.5,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/h6ZTkf/Screen-Shot-2018-10-18-at-2-26-01-AM.png'
  })

  const oscar = await Student.create({
    firstName: 'Oscar',
    lastName: 'Diggs',
    email: 'hot_air@comcast.net',
    gpa: 3.8,
    campusId: 2,
    imageUrl: 'https://image.ibb.co/bMd2vf/oz.png'
  })

  const zeke = await Student.create({
    firstName: 'Zeke',
    lastName: 'Lyons',
    email: 'courageous@gmail.com',
    gpa: 3.1,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/mkwKrL/Screen-Shot-2018-10-18-at-2-28-58-AM.png'
  })

  const hickory = await Student.create({
    firstName: 'Hickory',
    lastName: 'Tinman',
    email: 'oilcan381212@comcast.net',
    gpa: 3,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/g8wxd0/Screen-Shot-2018-10-18-at-2-29-26-AM.png'
  })

  const hunk = await Student.create({
    firstName: 'Huck',
    lastName: 'Scarecrow',
    email: 'if_i_only_had_a_brain@gmail.com',
    gpa: 2.5,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/cFuTkf/Screen-Shot-2018-10-18-at-2-28-25-AM.png'
  })

  const gulch = await Student.create({
    firstName: 'Gulch',
    lastName: 'West',
    email: 'shoe_lover31@gmail.com',
    gpa: 3.7,
    campusId: 2,
    imageUrl: 'https://image.ibb.co/bvFt1L/witch-of-west.png'
  })

  const glinda = await Student.create({
    firstName: 'Glinda',
    lastName: 'Goodwitch',
    email: 'glinda_good@outlook.com',
    gpa: 2,
    campusId: 2
  })

  const em = await Student.create({
    firstName: 'Em',
    lastName: 'Gale',
    email: 'antie_em@comcast.net',
    gpa: 4,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/icf15f/Screen-Shot-2018-10-18-at-2-28-05-AM.png'
  })

  const frodo = await Student.create({
    firstName: 'Frodo',
    lastName: 'Baggins',
    email: 'furry_feet@outlook.com',
    gpa: 3,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/b7f480/frodo.png'
  })

  const bilbo = await Student.create({
    firstName: 'Bilbo',
    lastName: 'Baggins',
    email: 'adventurer@gmail.com',
    gpa: 2.9,
    campusId: 3
  })

  const samwise = await Student.create({
    firstName: 'Samwise',
    lastName: 'Gamgee',
    email: 'po_tay_toes@outlook.com',
    gpa: 2.5,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/gFOD1L/samwise.png'
  })

  const meriadoc = await Student.create({
    firstName: 'Bilbo',
    lastName: 'Meriadoc',
    email: 'm_brandybuck@gmail.com',
    gpa: 2.7,
    campusId: 3
  })

  const peregrin = await Student.create({
    firstName: 'Peregrin',
    lastName: 'Took',
    email: 'it_comes_in_pints@gmail.com',
    gpa: 2.8,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/gdeLgL/pip.png'
  })

  const legolas = await Student.create({
    firstName: 'Legolas',
    lastName: 'Greenleaf',
    email: 'woodland_realm@gmail.com',
    gpa: 3.5,
    campusId: 3
  })

  const smeagol = await Student.create({
    firstName: 'Sméagol',
    lastName: 'Trahald',
    email: 'ring_lover123@outlook.com',
    gpa: 2,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/hoofgL/gollum.png'
  })

  const peterP = await Student.create({
    firstName: 'Peter',
    lastName: 'Pan',
    email: 'forever_young@outlook.com',
    gpa: 2.1,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/gjk480/peter-pan.png'
  })

  const wendy = await Student.create({
    firstName: 'Wendy',
    lastName: 'Darling',
    email: 'i_can_fly@outlook.com',
    gpa: 2,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/nicUaf/wendy.png'
  })

  const michael = await Student.create({
    firstName: 'Michael',
    lastName: 'Darling',
    email: 'm_darling@outlook.com',
    gpa: 2.3,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/mLAFFf/micheal.png'
  })

  const john = await Student.create({
    firstName: 'John',
    lastName: 'Darling',
    email: 'j_darling@outlook.com',
    gpa: 3.9,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/dCW0gL/john.png'
  })

  const smee = await Student.create({
    firstName: 'Smee',
    lastName: 'Gilbert',
    email: 'apirateslifeforme@outlook.com',
    gpa: 2,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/fFHj80/smee.png'
  })

  const hook = await Student.create({
    firstName: 'Hook',
    lastName: 'Darling',
    email: 'ships1234@gmail.com',
    gpa: 3,
    campusId: 4
  })
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
