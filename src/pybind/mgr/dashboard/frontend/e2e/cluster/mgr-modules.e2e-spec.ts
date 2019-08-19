import { Helper } from '../helper.po';

describe('Manager modules page', () => {
  let mgrmodules: Helper['mgrmodules'];

  beforeAll(() => {
    mgrmodules = new Helper().mgrModules;
  });

  afterEach(async () => {
    await Helper.checkConsole();
  });

  describe('breadcrumb test', () => {
    beforeAll(async () => {
      await mgrmodules.navigateTo();
    });

    it('should open and show breadcrumb', async () => {
      expect(await mgrmodules.getBreadcrumbText()).toEqual('Manager modules');
    });
  });

  describe('verifies editing functionality for manager modules', () => {
    beforeAll(async () => {
      await mgrmodules.navigateTo();
    });

    it('should test editing on ansible module', async () => {
      const ansibleArr = [['rq', 'ca_bundle'], ['colts', 'server_location']];
      await mgrmodules.editMgrModule('ansible', ansibleArr);
    });

    it('should test editing on deepsea module', async () => {
      const deepseaArr = [
        ['rq', 'salt_api_eauth'],
        ['alm', 'salt_api_password'],
        ['bu', 'salt_api_url'],
        ['sox', 'salt_api_username']
      ];
      await mgrmodules.editMgrModule('deepsea', deepseaArr);
    });

    it('should test editing on diskprediction_local module', async () => {
      const diskpredLocalArr = [['11', 'predict_interval'], ['0122', 'sleep_interval']];
      await mgrmodules.editMgrModule('diskprediction_local', diskpredLocalArr);
    });

    it('should test editing on balancer module', async () => {
      const balancerArr = [['rq', 'pool_ids']];
      await mgrmodules.editMgrModule('balancer', balancerArr);
    });

    it('should test editing on dashboard module', async () => {
      const dashboardArr = [['rq', 'AUDIT_API_ENABLED'], ['rafa', 'GRAFANA_API_PASSWORD']];
      await mgrmodules.editMgrModule('dashboard', dashboardArr);
    });

    it('should test editing on devicehealth module', async () => {
      await mgrmodules.editDevicehealth('1987', 'sox', '1999', '2020', '456', '567');
    });
  });
});
