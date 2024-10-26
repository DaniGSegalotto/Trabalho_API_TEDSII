import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function NoAnimationExample() {
  return (
    <div className="tabs-container">

      <h2 className="mb-4">
        Lista de Pets que já passaram por nossa clínica!
      </h2>

      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 tabs-padding"
      >
        <Tab eventKey="home" title="Cachorros">
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Idade</th>
                  <th>Raça</th>
                  <th>Código</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Miguel</td>
                  <td>8 Meses</td>
                  <td>Golden</td>
                  <td>00A1</td>
                </tr>
                <tr>
                  <td>Maya</td>
                  <td>8 Anos</td>
                  <td>Xitsu</td>
                  <td>01A2</td>
                </tr>
                <tr>
                  <td>Alberto</td>
                  <td>3 Ano</td>
                  <td>Guaipeca</td>
                  <td>00A3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Gatos">
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Idade</th>
                  <th>Raça</th>
                  <th>Código</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tredds</td>
                  <td>3 Meses</td>
                  <td>Siberian</td>
                  <td>11B1</td>
                </tr>
                <tr>
                  <td>Leonildo</td>
                  <td>15 Anos</td>
                  <td>Himalayan</td>
                  <td>11B2</td>
                </tr>
                <tr>
                  <td>Felipe</td>
                  <td>15 Dias</td>
                  <td>Havana Brown</td>
                  <td>11B3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default NoAnimationExample;
