import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import Checkbox from './Checkbox';

const tags = [
  { value: "Adventure", label: "adventure" },
  { value: "Celebrities", label: "Celebrities" },
  { value: "Chain Stories", label: "Chain Stories" },
  { value: "Erotic Couplings", label: "Erotic Couplings" },
  { value: "Erotic Horror", label: "Erotic Horror" },
  { value: "Exhibitionist & Voyeur", label: "Exhibitionist & Voyeur" },
  { value: "Fetish", label: "Fetish" },
  { value: "First Time", label: "First Time" },
  { value: "Gay Male", label: "Gay Male" },
  { value: "Group Sex", label: "Group Sex" },
  { value: "How To", label: "How To" },
  { value: "Humor & Satire", label: "Humor & Satire" },
  { value: "Illustrated", label: "Illustrated" }
];


class Main3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenavElClassName: "sidenav",
      selectedOption: null,
      startDate: new Date(),
      otherflag: true,
      otherText: "",
      editReject: true,
      editEndflag: false,
      selectedCat: false,
      aded : [
        { value: "Summer hot Stories", label: "Summer hot Stories" },
        { value: "Editor's Favorites", label: "Editor's Favorites" },
        { value: "Heliocentrism", label: "Heliocentrism" }
      ],
page: 1,
    };
    this.myRef = React.createRef();
  }
  onaddcat = () => {
    const {aded} = this.state;
    
    this.setState({
      aded: [...aded, this.state.selectedCat]
    })
    
  }
  onRemovecat = (e) => {
    const {aded} = this.state;
    const aded2 = aded.filter((it)=>(it.label !== e.target.getAttribute('data-val') ))
   
    this.setState({
      aded: [...aded2]
    })
  }
  changeCategories = (e) => {
    
    this.setState({selectedCat: e})
  }
  oneditReject = e => {
    e.preventDefault();
    this.setState({
      editReject: !this.state.editReject
    });
    this.myRef.current.focus();
  };
  handleClick = e => {
    e.preventDefault();
    if (this.state.sidenavElClassName.includes("active")) {
      this.setState({ sidenavElClassName: "sidenav" });
    } else {
      this.setState({ sidenavElClassName: "sidenav active" });
    }
  };

  handleChangeDate = d => {
    this.setState({ startDate: d });
  };
  changeOther = e => {

    this.setState({
      otherflag: !e
    });
  };

  editEnd = e => {
    e.preventDefault();
    this.setState({
      editEndflag: !this.state.editEndflag
    });
  };
render() {
    return (
      <>
 <div className="main-monoblock blue">
            <div className="main-monoblock_head">Story Information</div>
          </div>

          <div className="main-header">
            <div className="main-header__updates ">
              <div className="card_title brand_tittle_small mb-20">
                Previously Rejected:
              </div>
              <ul className="two_columns_list">
                <li>
                  <div>
                    Did I follow the Writer's Guidelines for submission? These
                    can be found by clicking here
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="flat-checkbox"
                      id="check_large"
                      checked
                    />
                    <label for="check_large">Writer's Guidelines</label>
                  </div>
                </li>
                <li>
                  <div>
                    Could the story be developed more fully? That is, is it too
                    short to do the plot justice? Is it under 750 words?
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="flat-checkbox"
                      id="check_large"
                      checked
                    />
                    <label for="check_large">Length</label>
                  </div>
                </li>
                <li
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    paddingRight: "2rem"
                  }}
                >
                  <i className="fa fa-paper-plane abs" />
                  <div
                    style={{ width: "initial", fontFamily: "San Francisco" }}
                  >
                    <p>
                      Hi, I submitted my first story a few days ago, and there's
                      a formatting error on page 1, a line break, mid-paragraph.
                      I can't see on my end, is it a bug, or something you can
                      fix on your end? I well understand if you dont't have time
                      for this kind of thing but thought I would ask. Thanks for
                      your time, and all you do for this site!
                    </p>
                    <br />
                    <p style={{ margin: 0 }}>
                      <strong>Details:</strong>{" "}
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Email:</strong> ahsokatano514@yahoo.com
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Reporter's IP:</strong> 184.63.155.67
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Created At:</strong> 2015-01-22 07:13:04
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>User agent:</strong> Mozilla/5.0 (Windows NT 6.1;
                      WOW64; rv:35.0) Gecko/20100101 Firefox/35.0
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="main-monoblock"
            style={{ marginBottom: 60, position: "relative" }}
          >
            <div className="main-monoblock_head">
              Intergalactic Sexy Scientist Ch. 02
            </div>
            <div className="main-monoblock_subhead">
              <span className="grey">https://literotica.com/story/s/</span>
              intergalactic-sexy-scientist-ch-02
            </div>
            <span className="hint">Story Title/URL</span>
          </div>

          <div className="main-cards">
            <div className="card" style={{ flexDirection: 'column', marginBottom: 100 }}>
              <div className="card_title brand_tittle_small mb-20">
                Admin/Editor Notes:
              </div>
              <div className="button green abs">Confirm</div>
              <textarea className="textarea_card">
                You may include any special instructions in the Notes field.
                These comments will not be shown on the site, they will only be
                read by the webmaster before posting the submission on the site.
                If you used the volunteer editing program, you should include
                the name of your editor in this box.
              </textarea>
              <span className="hint" style={{ bottom: '-4.7rem', right: '2rem' }}>Admin/Editor Notes field is not viewable by users - only by admin and story editors. Can be used to: 1) send notes between the story editor(s) and admin and 2) contain reminders and notes of importance to the admin/editors.</span>
            </div>
            <div className="card" style={{ marginBottom: 60 }}>
              <div className="card_title brand_tittle_small mb-20">
                Story Tags:
              </div>
              <div className="tags_list">
                <div className="tag">
                  <i className="fa fa-tag" />
                  18 year old
                </div>
                <div className="tag">
                  <i className="fa fa-tag" />
                  affair
                </div>
                <div className="tag">
                  <i className="fa fa-tag" />
                  19-year-old
                </div>
                <div className="tag">
                  <i className="fa fa-tag" />
                  abduction
                </div>
                <div className="tag">
                  <i className="fa fa-tag" />
                  action adventure
                </div>
                <div className="tag">
                  <i className="fa fa-tag" />
                  adultery
                </div>
                <div className="tag">
                  <i className="fa fa-tag" />
                  adventure
                </div>
              </div>
              <div className="button green abs">Confirm</div>
              <span className="hint">Tags Management</span>
            </div>
            <div className="card" style={{ marginBottom: 60, position: "relative" }}>
              <div>
              <div className="card_title brand_tittle_small">
                Add or Create Schema Category:
              </div>
              <div className="card_title">
                <Select
                  className="select"
                  value={this.state.selectedCat}
                  options={tags}
                  onChange={this.changeCategories}
                />
                <div className="button blue" onClick={this.onaddcat}>Add</div>
              </div>
              <div className="card_title brand_tittle_small mt-20 mb-20">
                Added to Schema Categories:
              </div>
              <div className="tags_list">
{this.state.aded.map((item)=>(

  <div className="tag">
  <i className="fa fa-folder-open" />
    {item.label}
  <i className="fa fa-times" data-val={item.label} onClick={this.onRemovecat} />
</div>
))}

               
              </div>
              </div>
              
              <span className="hint">Schema Categories Management</span>
            </div>
            <div className="card">
              <div className="card_title brand_tittle_small ">Language:</div>
              <div className="card_title" style={{marginLeft: 0}}>
                <Select
                  className="select"
                  value={[{ value: "English", label: "English" }]}
                  options={[
                    { value: "English", label: "English" },
                    { value: "Spanish", label: "Spanish" },
                    { value: "German", label: "German" }
                  ]}
                />
               <div className="button y" style={{marginLeft: '20px'}} >Save Change</div>
              </div>
              
            </div>

            <div className="card">
              <div className="card_title brand_tittle_small">Allow Voting? 
              <i className="fa fa-eye" style={{ fontSize: '1.5rem', lineHeight: '40px', marginLeft: "20px", color: 'rgba(0,0,0,0.4)'}} /></div>
              <div className="card_title" id="radio_large">
                <input
                  type="radio"
                  className="flat-checkbox"
                  id="radio_large_Aa"
                  name="radio_large"
                  
                />
                <label for="radio_large_Aa">From Followed</label>
                <input
                  type="radio"
                  className="flat-checkbox"
                  id="radio_large_Bb"
                  name="radio_large"
                />
                <label for="radio_large_Bb">No</label>
                <input
                  type="radio"
                  className="flat-checkbox"
                  id="radio_large_Cc"
                  name="radio_large"
                  defaultChecked={true}
                />
                <label for="radio_large_Cc">Yes</label>
              </div>
              <div className="card_title brand_tittle_small" style={{ textAlign: 'right' }}><i className="fa fa-history" style={{ lineHeight: '40px' }} /></div>
              
            </div>
            <div className="card">
              <div className="card_title brand_tittle_small">
                Allow Public Comments?<i className="fa fa-eye" style={{ fontSize: '1.5rem', lineHeight: '40px', marginLeft: "20px", color: 'rgba(0,0,0,0.4)'}} />
              </div>
              <div className="card_title" id="radio_largeA">
                <input
                  type="radio"
                  className="flat-checkbox"
                  id="radio_large_A"
                  name="radio_largeA"
                  
                />
                <label for="radio_large_A">From Followed</label>
                <input
                  type="radio"
                  className="flat-checkbox"
                  id="radio_large_B"
                  name="radio_largeA"
                />
                <label for="radio_large_B">No</label>
                <input
                  type="radio"
                  className="flat-checkbox"
                  id="radio_large_C"
                  name="radio_largeA"
                  defaultChecked={true}
                />
                <label for="radio_large_C">Yes</label>
              </div>
              <div className="card_title brand_tittle_small" style={{ textAlign: 'right' }}><i className="fa fa-history" style={{ lineHeight: '40px', opacity: 0 }} /></div>
            </div>
          </div>

          <div className=" StoryText" style={{ marginBottom: 60 }}>
            <div className="main-monoblock_head mb-20">
              Intergalactic Sexy Scientist Ch. 02
            </div>

            <textarea className="bigText mt-20">
              (Special thanks to JohnnyRottencrotch for suggesting the scenario
              for this story.) This time last year, an archaeologist and her
              assistant arrived in the Chihuahuan Desert from the UK to research
              ancient Native American sites. For whatever reason, that assistant
              had returned. David rented a cheap, beat-up car and drove for what
              seemed like hours to the rough location he circled on his map into
              the featureless desert. The drive was very tedious, especially
              seeing how last time, Dave had just slept through the entire
              journey but after hours of searching he finally found the familiar
              landmark: Visitor's Peak. With just a few moments until sunset,
              David waited inside the vehicle until night fell. Looking up to
              the sky, David could see the countless constellations in all their
              glory and heard a familiar humming noise lurking overhead. He
              stepped out from his car and looked up to see an ominous black
              circle against the blue backdrop. A white light came from this UFO
              and, in a few seconds, he was aboard and greeted by a familiar
              extraterrestrial face. It was Captain Ruta Saturnyne Terileptus,
              also imply known as Ruta to David. “Greetings, David.” Ruta said,
              doing her devil horn hand gesture with a smile on her face. She
              had not lost any of her charm in the past year. “Hi, Ruta.” David
              did the same hand signal. “How have you been?” “I'm quite well,
              thank you.” Ruta directed him to a door out of the laboratory.
              “Please come this way, I would like to get started as soon as
              possible.” The two walked together down the featureless corridor
              of the space ship, passing by the other crew members who were all
              short and nowhere near as attractive as their captain. "Hey, Ruta,
              I don't want to sound offensive but why are you so tall compared
              to everybody else?" David asked. "I'm the only female on board.
              Females of my people are generally much taller than the males."
              Ruta answered. "Any reason why?" "Well, as much as our
              civilisation prides itself on being highly intellectual, nobody
              knows for sure. There are some comprehensive theories but nothing
              concrete yet." "Doesn’t really matter anyway." "That's what I've
              been trying to tell everybody for decades!" "Decades? Just how old
              are you?" "Only 231 Solar years. Fairly young to be both a captain
              and a doctor, I know." "Uh...what?" David said, not thinking he
              heard her right. "Oh, forgive me. I forgot humans have such short
              life-spans." Ruta said. David just laughed. For somebody over two
              centuries old, she did not look half-bad. "So what kind of
              experiments are we doing today?" "I intercepted information from
              some sort of computer network on Earth known as the 'internet' and
              discovered some more...unorthodox mating rituals." "Oh, yeah?" "I
              think it would be better just to show rather than explain." The
              next thing he knew, David was sprawled out on a cold, shiny table.
              His hands were over his head and tied by what seemed to be a
              plastic synthetic rope with his feet strapped down and spread
              apart. Cameras like the one from last year were set up all around
              the walls of the room in different angles. Ruta walked in and was
              dressed in all-black leather instead of her usual rubber body
              suit. A corset was securely tied around her upper body,
              exaggerating her already impressive bust size. Each grey breast
              was fitted snugly into each cup and squashed up together. Down
              below, she was wearing a girdle along with a tight thong
              underneath. Elastic straps from the girdle were attached by hooks
              to the well-polished boots that went all the way up to her shapely
              thighs and ending with long, harsh heels on the soles that clacked
              against the floor as she walked towards the roped up human,
              holding a rather intimidating horse whip in one latex gloved hand
              and a bottle of transparent, viscous liquid in the other. “How do
              I look?” Ruta smiled as she twirled about on the spot to show Dave
              every inch of her outfit. From behind, it looked as though was not
              wearing a thong at all as the back-strap was consumed and
              disappearing into her arse crack. “I made it myself.” “Not bad.”
              David said, admiring the kinky look. “But you're way too nice to
              be a dominatrix. Try acting a little meaner.” “Oh, sorry.” Ruta
              forced a scowling, pouty face onto her cute features.
              “You...you...simpleton! Was that good enough?” “...just stick to
              being yourself.” David sighed. “What's my punishment going to be,
              mistress?” “I'm going to sit on your face! It's going to be very
              unpleasurable.” “I'm sure it will...” The alien hottie put her
              bottle down on the floor, climbed up onto the table and stood
              above David with his head between her legs. Ruta pulled down her
              thong, revealling that sweet, hairless blue snatch David missed so
              much in the past year. She squatted down, her behind just hovering
              a few centimetres from his face and he could smell her arousal
              already that made David's mouth salivate out of instinct, wanting
              to lock his lips right on it and taste the alien juices straight
              from the source. He got his wish when Ruta suddenly dropped her
              hips, his mouth connecting with her vagina and the rest of his
              face forced between her monochrome arse cheeks. Ruta twisted her
              hips, grinding her pelvis into David. “How does it feel to be my
              chair, you buffoon?” Ruta said to him, once again attempting to
              sound mean. David could not reply, at least, not very clearly. The
              noises coming from his mouth were obscured by her muted silver
              labia so instead he decided to use his tongue for a different
              purpose and give what Ruta really wanted to hear: the sound of him
              eating her out. His licking muscle swept its way up and down her
              horny, little slit, making lewd and exaggerated slurping noises as
              the liquids dribbled into his mouth and down his chin. Oddly
              enough, her cunt tasted like blueberries. Ruta let out flustered
              moans of pleasure while still trying to maintain her serious
              demeanour, rubbing her crotch deeper onto David's mouth whose face
              was buried deep into her sweaty bum, smelling the sweet scent
              coming from it. Naturally, this caused his penis to swell up to
              which Ruta took notice and tightly squeezed it in her shiny, black
              glove. “How do you expect to pleasure me with a reproductive organ
              so...mediocre in length?” Ruta said in a harsh tone. Well, harsh
              by her standards. “It did a pretty good job last time, if I do say
              so myself.” David retorted. “...I'm not very good at this whole
              'dom' thing, am I?” “I'm just teasing, silly.” David went back to
              eating her out and Ruta started to jerk him off very quickly
              attempting to be a bit rougher than how she usually was, pulling
              his foreskin further back and such. She then used her remaining
              hand to clench his testicles, grasping them tightly and grinding
              them together while working the shaft at the same time. It was
              slightly painful for David but nothing too extreme, just the way
              he liked at he just kept on drinking her nectar and sucking on her
              blue clitoris, making the alien twitch in pleasure but something
              else was also starting to twitch. Dave's penis throbbed in Ruta's
              hand who call also feel his ball-sack contract in her palm. “Oh,
              god, Ruta, I'm about to cum!” David yelled out but just before he
              could satisfyingly release his seed, Ruta quickly removed her
              hands far away from his genitals. The cock did not ejaculate but
              remained pulsing. A disappointed and on edge David then said:
              “Hey! Aren't you going to finish?” “Q-quiet, you! I decide when
              you orgasm or not from now on.” Ruta replied. “Oh, you bitch!”
              David grinned. “I love it!” “Maybe if you can please me, I will
              finish.” “Yes, Mistress Ruta!” Dave said and, like the obedient
              servant he was, probed his tongue deeper into her sweet pussy,
              probing it in as far as he could while Ruta teased his dick by
              slowly brushing her whip against the underside of his dick. “Mmm,
              yes, just like that...” Ruta groaned. “I mean, is that all you've
              got? You've got to try harder than that, imbecilic slave.” Ruta
              dismounted David's face and unstrapped him from the table to which
              he stood up onto the floor. He was tempted just to masturbate then
              and there since we was still on the cusp of cumming but decided
              not to, in case he upset his 'mistress' but Ruta used the leftover
              rope and bound his hands together anyway, leaving him with little
              choice. “Bend over.” She ordered. David complied and leaned
              himself over the table with his legs apart and his subsiding boner
              dangling in between, expecting a spanking. Ruta removed the glove
              on her right hand and reached for the bottle on the floor. She
              poured some of it's gooey contents all over Dave's behind,
              especially in between his cheeks to which David finally realised
              was actually lubricant. Piecing together the fact that it was
              lubricant, it was going past his arsehole, Ruta was practising
              femdom and she was now lubing up her fingers with the stuff, he
              had a pretty good idea what was going to happen next. David had
              never done anything anal releated before so he was a little
              intimidated for once. “Uh, Ruta? Can you be a bit gentle for....?”
              David nervously smiled, looking over his shoulder. “Silence,
              suidae!” Ruta snapped. David's mouth shut tight and wondered what
              the hell a suidae was before he felt Ruta's slender, grey fingers
              move in between his cheeks. His whole body shivered as he felt her
              digits go past his sphincter then jolted and let out a rather
              not-so-masculine moan as Ruta's middle finger penetrated, sliding
              its way into his virgin arse. Ruta felt the warm walls tighten
              around her probe and managed to get pretty deep, to the point her
              knuckles were touching his flesh. “Does it hurt?” Ruta asked. “I
              saw this a few times but I don't think most human males like it.”
              “N-no. It feels quite nice actually. Different...but nice.” David
              replied through his gasps of breath. Ruta smiled, temporary
              stepping out of her dominant persona. She started to gently finger
              fuck him, sliding back and forth while his back door sucked down
              hard on the prod, refusing to let it go so easily. “Fascinating.”
              Ruta muttered to herself. She pulled her finger out with a strand
              of thick lube dripping from the nailless tip. She put it back up
              against the hole but this time added her ring finger on top of her
              other one and pushed the two digits in together, spreading Dave's
              hole apart, twisting and turning them inside as he made more
              feminine noises. With her free hand, she jerked him off once again
              in a downwards motion since his erection was not quite as on edge,
              milking him like a cow and occasionally letting go to give his
              arse cheeks light slaps. Ruta then felt some kind of lump within
              David's arsehole. “Is this the prostate?” The curious alien
              tickled the bump. David's eyes bulge out as he felt what was like
              an electric shock coursing through his body, his cock had once
              again become fully erect as he bit his lower lip, trying his best
              not to orgasm. Ruta kept on playing with his shaft and massaging
              his g-spot in unison, both very quickly. He reached his breaking
              point once again and just like before, Ruta took her hands away
              from his penis and removed her fingers from the flesh-hole just
              before David could cum. “Aw, come on! Seriously!?” David was
              pissed off about being denied an orgasm for the second time
              tonight, his cock oozing pre-cum non-stop like a leaky tap. “I am
              being very serious.” Ruta looked at her handiwork, the slightly
              gaped anus was pulsing from being toyed with. Ruta could not help
              herself and moved her head closer to his open hole and give it a
              small lick with her long blue tongue, pressing her thumb just
              above it to keep the way opened. This was not enough to make David
              ejaculate but did tease him enough to make him shiver in euphoria,
              almost loosing all feeling in his knees and collapsing. “I think
              I'll allow you to orgasm now...um...diptera larva. You better be
              grateful.” Ruta stepped back up onto her feet. “Yes! Please! Thank
              you, mistress.” Ruta then went out the room without an
              explanation, leaving David alone, confused and horny. He attempted
              to masturbate with his roped-up hands but it was no use, he could
              not get a good enough feeling from it to cum. He just sat his
              naked arse down on the floor and patiently waited like a good
              little bottom bitch. Eventually, Ruta came back in as David perked
              right back up onto his knees like a dog greeting its owner.
              However, around her waist now was a fat, pre-lubed, black strap-on
              dildo. “No fucking way...” David said, watching the phallus wobble
              as she walked towards him. “It's not too big, is it?” Ruta asked.
              “Kind of...” He replied. Ruta sighed, looking dejected. “But I
              think I can take it. As long as you're gentle.” “You really mean
              it?” “Yeah, just step out of character for once.” David said,
              despite Ruta not being a very convincing actress in the first
              place. “As long as it makes you happy.” She smiled. Dave grinned
              back, turned around and dropped his elbows on the floor with his
              partially widened arsehole in clear view for her. Ruta also got to
              her knees and pointed her fake penis towards his boypussy. She
              teased the opening with her tip and slowly slid it inside, parting
              the flesh apart before holding onto his shoulders to balance
              herself. David huffed as the dildo made it's way into his rectum,
              filling and spreading him until it reached as far as she could go,
              touching both their bodies together. Ruta hunched over Dave's body
              with her arms reach around, twiddling with his nipples, and bucked
              her hips a few more times, rubbing against his prostate once again
              David grunted, breathing heavily through his nose and slobbering
              slightly. “Please, Ruta...No more...I need to cum!” David
              whimpered. “Let me just do one more thing.” Ruta replied, as she
              nibbled on his ear. The alien cutie reached down in between her
              legs, flicking a small switch attached to the harness that caused
              the phallus to start vibrating. Not just a light vibration either
              but full on audible, high-energy vibrating. Needless to say,
              David's was stunned. His eyes were streaming tears, his teeth
              biting against one another and his hands were gripped tightly into
              fists feeling his insides get stirred up and thrust into at the
              same time. “Oh, god...can't hold back...” David muttered under his
              breath. His genitals began to throb for the last time tonight.
              Finally, Dave came with his penis not getting touched at all
              during the pegging. A high pressurised squirt of thick, white
              fluid shot from his urethra, leaving a long strand across the
              floor. A few more shots fired, also staining the once sterile
              ground. David yelled loudly, echoing down the corridors of the
              ship. Ruta also reached her climax, thought it was not as intense.
              Her screams were drowned out by the shouts Dave was making. Ruta
              pulled herself out, dildo still vibrating, and stood up to view
              the results as David lay twitching on the floor, used and mildly
              abused. “Goodness! You ejaculated even more semen than last time.
              This is an excellent discovery.” Ruta said while turning the
              switch off. “G-glad it was worth it.” David said, resting his face
              down on the floor. “See you tomorrow.” Ruta smirked and left the
              room. “Oh, right...I'm here for a while...” David groaned. (Thank
              you for reading and I am sorry for any spelling or grammatical
              errors.)
            </textarea>

            <span className="hint">StoryText</span>
          </div>

          <div
            className="main-monoblock"
            style={{
              padding: "0 20px",
              marginBottom: 60,
              position: "relative"
            }}
          >
            <div className="main-monoblock_subhead">
              <ul className="two_columns_list">
                <li>
                  <div>Editor's pick?</div>
                  <div>
                    <input
                      type="checkbox"
                      className="flat-checkbox"
                      id="check_large"
                      checked
                    />
                    <label for="check_large">Editor's Pick</label>
                  </div>
                </li>
                <li>
                  <div>Contest Winner?</div>
                  <div>
                    <input
                      type="checkbox"
                      className="flat-checkbox"
                      id="check_large"
                      checked
                    />
                    <label for="check_large">Contest Winner</label>
                  </div>
                </li>
                <li>
                  <div>Contest:</div>
                  <div>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChangeDate}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                    />
                  </div>
                </li>
              </ul>
            </div>
            <span className="hint">Editor's Pick And Contest</span>
          </div>

          <div
            className="main-monoblock"
            style={{
              padding: "0 20px",
              marginBottom: 60,
              position: "relative"
            }}
          >
            <div className="main-monoblock_subhead">
              <ul className="two_columns_list">
                <li>
                  <div>Approve?</div>
                  <div>
                    <input
                      type="checkbox"
                      className="flat-checkbox"
                      id="check_large"
                      checked
                    />
                    <label for="check_large">Published Live</label>
                  </div>
                </li>
                <li>
                  <div>Publish on:</div>
                  <div>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div>Publication time:</div>
                  <div>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="h:mm aa"
                      timeCaption="Time"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <span className="hint">Publication</span>
          </div>

          <div className="main-monoblock" style={{ padding: "0 20px" }}>
            <div className="main-monoblock_subhead">
              <ul className="two_columns_list">
                <li style={{ padding: 0 }}>
                  <div>Best for:</div>
                  <div>
                    <Select
                      className="select"
                      value={[{ value: "English", label: "English" }]}
                      options={[
                        { value: "English", label: "English" },
                        { value: "Spanish", label: "Spanish" },
                        { value: "German", label: "German" }
                      ]}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-overview">
            <div className="overviewcard">
              <div className="overviewcard__icon">Remove from Literotica?</div>
              <div className="overviewcard__info">
                <div className="button red">Remove</div>
              </div>
            </div>
            <div className="overviewcard">
              <div className="overviewcard__icon">
                Assign to another Author?
              </div>
              <div className="overviewcard__info">
                <div className="button blue">Assign</div>
              </div>
            </div>
            <div className="overviewcard">
              <div className="overviewcard__icon">Delete?</div>
              <div className="overviewcard__info">
                <div className="button red">Delete</div>
              </div>
            </div>
          </div>
          <div className="main-monoblock blue">
            <div className="main-monoblock_head">Reject Work</div>
          </div>

          <div
            className="main-monoblock"
            style={{
              padding: "40px 20px 0",
              fontSize: "1.2rem",
              lineHeight: 1.6,
              position: "relative",
              color: "#444"
            }}
          >
            <div
              className={`button ${!this.state.editReject ? "blue" : "y"} abs`}
              onClick={this.oneditReject}
            >
              {!this.state.editReject ? "Save" : "Edit"}
            </div>
            <p>
              <textarea
                ref={this.myRef}
                disabled={this.state.editReject}
                style={{
                  minHeight: "170px",
                  color: "rgb(68, 68, 68)",
                  backgroundColor: "#fff",
                  width: "100%",
                  resize: "none",
                  border: "none",
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  fontFamily: "San Francisco",
                  fontWeight: 400,
                  marginTop: 20,
                }}
              >
                Dear writer, Thank you for your submission to Literotica. We
                appreciate the time and effort you've taken to write a story and
                submit it to our site. However, we've found that we cannot post
                your submission. The checklist below may help you in
                re-examining your manuscript.
              </textarea>
            </p>
          </div>

          <div
            className="main-block"
            style={{ background: "#EEEEEE", paddingTop: 0 }}
          >
            <div className="main-block__updates">
              <ul className="two_columns_list">
                <li>
                  <div>
                    Did I follow the Writer's Guidelines for submission? These
                    can be found by clicking here
                  </div>
                  <div>
                    {/* <input
                      type="checkbox"
                      className="flat-checkbox"
                      id="check_large1"
                      onChange={e => {
                        e.preventDefault();
                        this.setState({ ch1: !this.state.ch1 });
                      }}
                      checked={this.state.ch1}
                    /> */}
                    <Checkbox label="Writer's Guidelines" id="1" />
                    {/* <label for="check_large1">Writer's Guidelines</label> */}
                  </div>
                </li>
                <li>
                  <div>
                    Could the story be developed more fully? That is, is it too
                    short to do the plot justice? Is it under 750 words?
                  </div>
                  <div>
                  <Checkbox label="Length" id="2" />
                   
                  </div>
                </li>
                <li>
                  <div>
                    Did I check to make sure everything was spelled correctly?
                  </div>
                  <div>
                  <Checkbox label="Spelling" id="3" />
                   
                  </div>
                </li>
                <li>
                  <div>
                    Were there any serious errors in punctuation or formatting
                    (i.e. submitted in all capital letters, capitalization
                    errors, etc.)?
                  </div>
                  <div>
                  <Checkbox label="Formatting" id="4" />
                   
                  </div>
                </li>
                <li>
                  <div>
                    Was the story not broken into appropriately sized
                    paragraphs?
                  </div>
                  <div>
                  <Checkbox label="Structure" id="5" />
                   
                  </div>
                </li>
                <li>
                  <div>
                    Was there an underage (under 18 years old) sexual
                    relationship in my story?
                  </div>
                  <div>
                  <Checkbox label="Child Abuse" id="6" />
                   
                  </div>
                </li>
                <li>
                  <div>
                    Were there URL links, site addresses, or other
                    advertisements within the story?
                  </div>
                  <div>
                  <Checkbox label="Advertising" id="7" />
                   
                  </div>
                </li>
                <li>
                  <div>
                    The file is not one we can open, came through garbled, or
                    the text field is blank.
                  </div>
                  <div>
                  <Checkbox label="Broken File" id="8" />
                   
                  </div>
                </li>
                <li>
                  <div>
                    The file you've sent is password protected. Please resubmit
                    the file without a password
                  </div>
                  <div>
                  <Checkbox label="Password Protected" id="9" />
                    
                  </div>
                </li>
                <li>
                  <div>OTHER:</div>
                  <div>
                    {/* <input
                      type="checkbox"
                      className="flat-checkbox"
                      id="check_largeX"
                      onChange={this.changeOther}
                      checked={this.state.otherflag}
                    />
                    <label for="check_largeX">Other</label> */}
                    <Checkbox label="Password Protected" id="10" onChange={this.changeOther} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {this.state.otherflag && (
            <div
              className="main-monoblock"
              style={{
                padding: "20px 20px 0",
                fontSize: "1.2rem",
                lineHeight: 1.6,
                position: "relative",
                color: "#444"
              }}
            >
              <textarea className="textarea_card" style={{ height: 150 }}>
                Please do not use copyrighted lyrics in their entirety.
                Excerpted lyrics are okay, but not most or all of a song.
              </textarea>
            </div>
          )}

          <div
            className="main-monoblock"
            style={{
              padding: "40px 20px 0",
              fontSize: "1.2rem",
              lineHeight: 1.6,
              position: "relative",
              color: "#444"
            }}
          >
            <div
              className={`button abs ${!this.state.editEndflag ? "blue" : "y"}`}
              onClick={this.editEnd}
            >
              {!this.state.editEndflag ? "Edit" : "Save"}
            </div>
            <p>
              <textarea
                className="textarea_card"
                disabled={!this.state.editEndflag}
                style={{ color: "#000" }}
              >
                Submit the story after a Volunteer Editor has examined it, or
                after you've made revisions. You can find a list of Volunteer
                Editors here Please consult our &ensp; Writer's Resources
                section and make sure you read our submission guidelines: If you
                have any questions on these, please let us know. Thanks for your
                time, and look forward to reading you again!&#13;&#10; Laurel
                &amp; Manu&#13;&#10; Literotica.Com
              </textarea>
            </p>
          </div>
              </>
      )
}
}
export default Main3;