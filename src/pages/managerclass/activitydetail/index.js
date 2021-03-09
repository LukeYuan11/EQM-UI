import React from 'react'
import { Helmet } from 'react-helmet'

// import Table1 from 'components/kit/widgets/Tables/1'
// import Table2 from 'components/kit/widgets/Tables/2'
// import Table3 from 'components/kit/widgets/Tables/3'
// import Table4 from 'components/kit/widgets/Tables/4'
// import Table5 from 'components/kit/widgets/Tables/5'
import Table9 from 'components/kit/widgets/Tables/9'
// import Table6 from 'components/kit/widgets/Tables/6'
// import Table7 from 'components/kit/widgets/Tables/7'
// import Table8 from 'components/kit/widgets/Tables/8'

const Widgets = (props) => {
  console.log('props', props)
  return (
    <div>
      <Helmet title="Widgets / Tables" />
      <div className="row">
        <div className="col-sm-12">
          <div>
            <h2 className="badge-example">Table / 5</h2>
            <div className="card">
              <div className="card-body">
                <Table9 />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Widgets
