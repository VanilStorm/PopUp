import style from './App.module.css'

const App = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div>Create Location</div>
        <div className={style.closeIcon}></div>
      </header>

      <main>
        <div className={style.nameInput}>
          <input type='text' placeholder='Location name'/>
        </div>

        <div className={style.workweek}>
          <div className={style.workweekIcon}></div>
          <div className={style.workdays}>
            <div className={style.checkbox}>
              <input type="checkbox" className={style.customCheckbox} id="Sunday" name="Sunday" value="yes"/>
              <label for="Sunday">Sunday</label>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" className={style.customCheckbox} id="Monday" name="happy" value="yes"/>
              <label for="Monday">Monday</label>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" className={style.customCheckbox} id="Tuesday" name="Tuesday" value="yes"/>
              <label for="Tuesday">Tuesday</label>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" className={style.customCheckbox} id="Wednesday" name="Wednesday" value="yes"/>
              <label for="Wednesday">Wednesday</label>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" className={style.customCheckbox} id="Thursday" name="Thursday" value="yes"/>
              <label for="Thursday">Thursday</label>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" className={style.customCheckbox} id="Friday" name="Friday" value="yes"/>
              <label for="Friday">Friday</label>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" className={style.customCheckbox} id="Saturday" name="Saturday" value="yes"/>
              <label for="Saturday">Saturday</label>
            </div>
          </div>
        </div>

        <div className={style.accountingYear}>
          <div className={style.accountingYearInput}>
            <input type='text' value='Accounting year'/>
            <div className={style.groupIcon}></div>
          </div>

          <div className={style.infoIcon}></div>
          <div className={style.accountingIcon}></div>
        </div>

        <div className={style.fiscalYear}>
            <div className={style.month}>
              <input type="text" value='January'/>
              <div className={style.groupIcon}></div>
            </div>

            <div className={style.day}>
              <input type='text' value='1'/>
              <div className={style.groupIcon}></div>
            </div>
        </div>

        <div className={style.noBrought}>
          <input type="checkbox" className={style.customCheckbox} id="noBrought" name="noBrought" value="yes"/>
          <label for="noBrought">No Brought Forward Expiry Date</label>
          <div className={style.infoIcon}></div>
        </div>

        <div className={style.weekStartsOn}>
          <input type="text" value='Monday'/>
          <div className={style.groupIcon}></div>
          <div className={style.weekStartsOnIcon}></div>
        </div>

        <div className={style.timeZone}>
          <input type='text' value='(GMT+03:00) Moscow+00 - Moscow'/>
          <div className={style.groupIcon}></div>
          <div className={style.infoIcon}></div>
          <div className={style.timeZoneIcon}></div>
        </div>

        <div className={style.users}>
          <div className={style.user}>
            <span>Julia Senko</span>
            <div className={style.blueClose}></div>
          </div>

          <div className={style.user}>
            <span>Aleksandr</span>
            <div className={style.blueClose}></div>
          </div>

          <div className={style.user}>
            <span>Jessica Monro</span>
            <div className={style.blueClose}></div>
          </div>

          <div className={style.groupIcon}></div>
          <div className={style.usersIcon}></div>
        </div>

        <div className={style.warning}>
          <div className={style.warningIcon}></div>
          <span>Adding or removing a user might impact the user's configuration and leave information (e.g. the initial brought forward days).</span>
        </div>

        <div className={style.makeLocDef}>
          <input type="checkbox" className={style.customCheckbox} id="makeLocDef" name="makeLocDef" value="yes"/>
          <label for="makeLocDef">Make This Location Default</label>
          <div className={style.infoIcon}></div>
        </div>

        <div className={style.leavePolice}>
          Once you've created a Location, assign a <span>Leave Policy </span> to the Location, in order to enable Users to request Leave.  To assign a Leave Policy, go to Location {'>'} Leave Policies {'>'} Assign Leave Policy.
        </div>

        <div className={style.createCancel}>
          <button className={style.cancel}>Cancel</button>
          <button className={style.create}>Create</button>
        </div>

      </main>
    </div>
  );
}

export default App;
