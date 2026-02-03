# @sl-mikaelodokine/texei-sfdx-plugin

[![Version](https://img.shields.io/npm/v/@sl-mikaelodokine/texei-sfdx-plugin.svg)](https://npmjs.org/package/@sl-mikaelodokine/texei-sfdx-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/@sl-mikaelodokine/texei-sfdx-plugin.svg)](https://npmjs.org/package/@sl-mikaelodokine/texei-sfdx-plugin)
[![Downloads/total](https://img.shields.io/npm/dt/@sl-mikaelodokine/texei-sfdx-plugin.svg)](https://npmjs.org/package/@sl-mikaelodokine/texei-sfdx-plugin)
[![GitHub stars](https://img.shields.io/github/stars/sl-mikaelodokine/texei-sfdx-plugin)](https://gitHub.com/sl-mikaelodokine/texei-sfdx-plugin/stargazers/)
[![GitHub contributors](https://img.shields.io/github/contributors/sl-mikaelodokine/texei-sfdx-plugin.svg)](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/graphs/contributors/)
[![License](https://img.shields.io/npm/l/sfdmu.svg)](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/master/LICENSE.txt)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Texeï's plugin for sfdx (fork by sl-mikaelodokine with sharingcalc fixes)

## Install Plugin

### Install as plugin

Install plugin: `sf plugins install @sl-mikaelodokine/texei-sfdx-plugin`

### Install from source

Install the SF CLI.

Clone the repository: `git clone https://github.com/sl-mikaelodokine/texei-sfdx-plugin.git`

Install npm modules: `npm install`

Link the plugin: `sf plugins link ./`

## Note

This is a fork of the original [texei-sfdx-plugin](https://github.com/texei/texei-sfdx-plugin) with fixes for race conditions in sharingcalc commands.

## Documentation

https://texei.github.io/texei-sfdx-plugin (original documentation)

<!-- commands -->

- [`sfdx texei:contractstatus:value:add`](#sfdx-texeicontractstatusvalueadd)
- [`sfdx texei:cpqsettings:set`](#sfdx-texeicpqsettingsset)
- [`sfdx texei:data:export`](#sfdx-texeidataexport)
- [`sfdx texei:data:import`](#sfdx-texeidataimport)
- [`sfdx texei:data:plan:generate`](#sfdx-texeidataplangenerate)
- [`sfdx texei:debug:lwc:enable`](#sfdx-texeidebuglwcenable)
- [`sfdx texei:externalcredentials:principals:authenticationparameters:add`](#sfdx-texeiexternalcredentialsprincipalsauthenticationparametersadd)
- [`sfdx texei:org:contractfieldhistory:fix`](#sfdx-texeiorgcontractfieldhistoryfix)
- [`sfdx texei:org:shape:extract`](#sfdx-texeiorgshapeextract)
- [`sfdx texei:package:dependencies:install`](#sfdx-texeipackagedependenciesinstall)
- [`sfdx texei:picklist:create`](#sfdx-texeipicklistcreate)
- [`sfdx texei:picklist:restrict`](#sfdx-texeipicklistrestrict)
- [`sfdx texei:picklist:unrestrict`](#sfdx-texeipicklistunrestrict)
- [`sfdx texei:profile:clean`](#sfdx-texeiprofileclean)
- [`sfdx texei:profile:convert`](#sfdx-texeiprofileconvert)
- [`sfdx texei:profile:empty`](#sfdx-texeiprofileempty)
- [`sfdx texei:sharedactivities:enable`](#sfdx-texeisharedactivitiesenable)
- [`sfdx texei:sharingcalc:recalculate`](#sfdx-texeisharingcalcrecalculate)
- [`sfdx texei:sharingcalc:resume`](#sfdx-texeisharingcalcresume)
- [`sfdx texei:sharingcalc:suspend`](#sfdx-texeisharingcalcsuspend)
- [`sfdx texei:skinnyprofile:check`](#sfdx-texeiskinnyprofilecheck)
- [`sfdx texei:skinnyprofile:create`](#sfdx-texeiskinnyprofilecreate)
- [`sfdx texei:skinnyprofile:retrieve`](#sfdx-texeiskinnyprofileretrieve)
- [`sfdx texei:source:customlabel:replace`](#sfdx-texeisourcecustomlabelreplace)
- [`sfdx texei:source:flow:convert`](#sfdx-texeisourceflowconvert)
- [`sfdx texei:source:layouts:cleanorg`](#sfdx-texeisourcelayoutscleanorg)
- [`sfdx texei:user:update`](#sfdx-texeiuserupdate)

## `sfdx texei:contractstatus:value:add`

[DEPRECATED - Use Metadata API instead] add a value to Contract Status picklist

```
USAGE
  $ sfdx texei:contractstatus:value:add -o <value> -l <value> -a <value> [--json] [--flags-dir <value>] [--api-version <value>] [-s
    Draft|Activated|InApprovalProcess]

FLAGS
  -a, --apiname=<value>          (required) API Name of the Contract Status value to add
  -l, --label=<value>            (required) label of the Contract Status value to add
  -o, --target-org=<value>       (required) Username or alias of the target org. Not required if the `target-org`
                                 configuration variable is already set.
  -s, --statuscategory=<option>  [default: Draft] Status Category of the Contract Status value to add
                                 <options: Draft|Activated|InApprovalProcess>
      --api-version=<value>      Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  sf texei contractstatus value add --label 'My New Contract Status Label' --apiname 'My New Contract Status API Name' --target-org texei
```

_See code: [src/commands/texei/contractstatus/value/add.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/contractstatus/value/add.ts)_

## `sfdx texei:cpqsettings:set`

set CPQ Settings from file

```
USAGE
  $ sfdx texei:cpqsettings:set -o <value> -f <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -f, --inputfile=<value>    (required) path to CPQ Settings file
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  sf texei cpqsettings set --inputfile mySettings.json
```

_See code: [src/commands/texei/cpqsettings/set.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/cpqsettings/set.ts)_

## `sfdx texei:data:export`

export objects' data from org

```
USAGE
  $ sfdx texei:data:export -o <value> -d <value> [--json] [--flags-dir <value>] [--api-version <value>] [-s <value>]
    [-p <value>] [-a rest|bulk] [-e]

FLAGS
  -a, --apitype=<option>     [default: rest] API Type to use
                             <options: rest|bulk>
  -d, --outputdir=<value>    (required) directory where to store files
  -e, --exclude-null-fields  Exclude null fields from exported JSON files
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --dataplan=<value>     path to data plan file
  -s, --objects=<value>      comma-separated list of objects to export
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  sf texei data export --objects Account,Contact,MyCustomObject__c --outputdir ./data --target-prg texei

  sf texei data export --dataplan ./data/data-plan.json --outputdir ./data --target-org texei
```

_See code: [src/commands/texei/data/export.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/data/export.ts)_

## `sfdx texei:data:import`

import objects' data to org

```
USAGE
  $ sfdx texei:data:import -o <value> -d <value> [--json] [--flags-dir <value>] [--api-version <value>] [-a] [-e] [-p
    <value>] [-i] [--verbose]

FLAGS
  -a, --allornone                any failed records in a call cause all changes for the call to be rolled back
  -d, --inputdir=<value>         (required) directory with files to import
  -e, --ignoreerrors             errors are displayed as warnings only and import will continue
  -i, --ignoreunavailablefields  ignore fields that don't exist on target org or fields you don't have access to
  -o, --target-org=<value>       (required) Username or alias of the target org. Not required if the `target-org`
                                 configuration variable is already set.
  -p, --dataplan=<value>         path to data plan file
      --api-version=<value>      Override the api version used for api requests made by this command
      --verbose                  verbose output of import result

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei data import --inputdir ./data --target-org texei-scratch
       Data imported!
```

_See code: [src/commands/texei/data/import.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/data/import.ts)_

## `sfdx texei:data:plan:generate`

generate a data plan used to export objects' data from org

```
USAGE
  $ sfdx texei:data:plan:generate -d <value> -s <value> [--json] [--flags-dir <value>]

FLAGS
  -d, --outputdir=<value>  (required) directory where to store the data plan file
  -s, --objects=<value>    (required) comma-separated list of objects to add to the data plan

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei data plan generate --objects Account,Contact,MyCustomObject__c --outputdir ./data
```

_See code: [src/commands/texei/data/plan/generate.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/data/plan/generate.ts)_

## `sfdx texei:debug:lwc:enable`

Enable Debug Mode for Lightning Components

```
USAGE
  $ sfdx texei:debug:lwc:enable -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  sf texei debug lwc enable --target-org myOrg@example.com
```

_See code: [src/commands/texei/debug/lwc/enable.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/debug/lwc/enable.ts)_

## `sfdx texei:externalcredentials:principals:authenticationparameters:add`

add Authentication Parameters to existing an External Credential

```
USAGE
  $ sfdx texei:externalcredentials:principals:authenticationparameters:add -o <value> -f <value> [--json] [--flags-dir
  <value>] [--api-version <value>]

FLAGS
  -f, --file=<value>         (required) file containing information of Authentication Parameters to add
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  add Authentication Parameters to existing an External Credential

  This commands will add Authentication Parameters to an existing External Credential and related Principal.
  Both External Credential and Principal definition can be part of your metadata, for security reasons Authentication
  Parameters are not.
  The expected format of the input JSON file is the same as the one expected by the REST API:
  https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_input.htm
  Best practice is to avoid commiting this file to your repository.

EXAMPLES
  sf texei externalcredentials principals authenticationparameters add --file ./env/credentials.json --target-org MyScratchOrg
```

_See code: [src/commands/texei/externalcredentials/principals/authenticationparameters/add.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/externalcredentials/principals/authenticationparameters/add.ts)_

## `sfdx texei:org:contractfieldhistory:fix`

fix Contract Field History Tracking that can't be deployed

```
USAGE
  $ sfdx texei:org:contractfieldhistory:fix -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei org contractfieldhistory fix"
  History tracking fixed.
```

_See code: [src/commands/texei/org/contractfieldhistory/fix.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/org/contractfieldhistory/fix.ts)_

## `sfdx texei:org:shape:extract`

[BETA] Extract Org Shape for an org

```
USAGE
  $ sfdx texei:org:shape:extract -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-d <value>] [-s
    basic|full|shaperepresentation]

FLAGS
  -d, --outputdir=<value>    [default: config] the output directory to store the extracted definition file
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --scope=<option>       [default: basic] the scope of settings to convert to the scratch definition file
                             <options: basic|full|shaperepresentation>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei org shape extract --target-org bulma@capsulecorp.com
```

_See code: [src/commands/texei/org/shape/extract.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/org/shape/extract.ts)_

## `sfdx texei:package:dependencies:install`

install dependent Packages for a sfdx project

```
USAGE
  $ sfdx texei:package:dependencies:install -o <value> [--json] [--flags-dir <value>] [-v <value>] [--api-version <value>] [-k <value>]
    [-b <value>] [-p <value>] [-s <value>] [-n <value>] [-w <value>] [-r] [-a <value>] [-t <value>]

FLAGS
  -a, --apexcompile=<value>       compile all Apex in the org and package, or only Apex in the package (see
                                  force:package:install for default value)
  -b, --branch=<value>            the package version’s branch
  -k, --installationkeys=<value>  installation key for key-protected packages (format is 1:MyPackage1Key 2:
                                  3:MyPackage3Key... to allow some packages without installation key)
  -n, --namespaces=<value>        filter package installation by namespace
  -o, --target-org=<value>        (required) Username or alias of the target org. Not required if the `target-org`
                                  configuration variable is already set.
  -p, --packages=<value>          comma-separated list of the packages to install related dependencies
  -r, --noprompt                  allow Remote Site Settings and Content Security Policy websites to send or receive
                                  data without confirmation
  -s, --securitytype=<value>      security access type for the installed package (see sf packageinstall for default
                                  value)
  -t, --upgrade-type=<value>      upgrade type for the package installation; available only for unlocked packages (see
                                  sf packageinstall for default value)
  -v, --target-dev-hub=<value>    Username or alias of the Dev Hub org.
  -w, --wait=<value>              number of minutes to wait for installation status (also used for publishwait). Default
                                  is 10
      --api-version=<value>       Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei package dependencies install --target-org MyScratchOrg --target-dev-hub MyDevHub -k "1:MyPackage1Key 2: 3:MyPackage3Key" -b "DEV"
```

_See code: [src/commands/texei/package/dependencies/install.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/package/dependencies/install.ts)_

## `sfdx texei:picklist:create`

create a picklist metadata file from a csv file (apiname;label)

```
USAGE
  $ sfdx texei:picklist:create -d <value> -p <value> -a <value> -l <value> [--json] [--flags-dir <value>] [-t
    Picklist|MultiselectPicklist]

FLAGS
  -a, --apiname=<value>    (required) Field API Name
  -d, --inputdir=<value>   (required) path to csv file
  -l, --label=<value>      (required) Field Label
  -p, --outputdir=<value>  (required) path where to save file
  -t, --type=<option>      [default: Picklist] Field Label Type
                           <options: Picklist|MultiselectPicklist>

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  sf texei picklist create --inputdir ./my-file.csv --outputdir ./force-app/main/default/objects/Opportunity/fields --label "My Field" --apiname MyField__c
```

_See code: [src/commands/texei/picklist/create.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/picklist/create.ts)_

## `sfdx texei:picklist:restrict`

[BETA] Add back restricted option on picklists

```
USAGE
  $ sfdx texei:picklist:restrict -o <value> -d <value> -e <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -d, --inputdir=<value>      (required) path to json file generated by sfdx texei:picklist:unrestrict --json >
                              my-file.json
  -e, --ignoreerrors=<value>  (required) errors are displayed as warnings only and import will continue
  -o, --target-org=<value>    (required) Username or alias of the target org. Not required if the `target-org`
                              configuration variable is already set.
      --api-version=<value>   Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei picklist restrict -d my-unrestricted-picklists.json
```

_See code: [src/commands/texei/picklist/restrict.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/picklist/restrict.ts)_

## `sfdx texei:picklist:unrestrict`

[BETA] Remove restricted option on picklists

```
USAGE
  $ sfdx texei:picklist:unrestrict -o <value> -e <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -e, --ignoreerrors=<value>  (required) errors are displayed as warnings only and import will continue
  -o, --target-org=<value>    (required) Username or alias of the target org. Not required if the `target-org`
                              configuration variable is already set.
      --api-version=<value>   Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei picklist unrestrict

  $ sf texei picklist unrestrict --json > my-unrestricted-picklists.json
```

_See code: [src/commands/texei/picklist/unrestrict.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/picklist/unrestrict.ts)_

## `sfdx texei:profile:clean`

clean Profile by removing permissions stored on Permission Set

```
USAGE
  $ sfdx texei:profile:clean [--json] [--flags-dir <value>] [-k <value>] [-p <value>]

FLAGS
  -k, --keep=<value>  comma-separated list of profile node permissions that need to be kept. Default:
                      layoutAssignments,loginHours,loginIpRanges,custom,userLicense
  -p, --path=<value>  comma-separated list of profiles, or path to profiles folder. Default: default package directory

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei profile clean -k layoutAssignments,recordTypeVisibilities

  $ sf texei profile clean -p custom-sfdx-source-folder/main/profiles

  $ sf texei profile clean -p custom-sfdx-source-folder/main/profiles,source-folder-2/main/profiles/myAdmin.profile-meta.xml
```

_See code: [src/commands/texei/profile/clean.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/profile/clean.ts)_

## `sfdx texei:profile:convert`

convert a Profile to a Permission Set [BETA]

```
USAGE
  $ sfdx texei:profile:convert -o <value> -n <value> [--json] [--flags-dir <value>] [--api-version <value>] [-r <value>]
    [-a <value>]

FLAGS
  -a, --override-api-name=<value>  override API Name generated from Profile name
  -n, --profile-name=<value>       (required) name of the Profile in the target org to convert to a Permission Set
  -o, --target-org=<value>         (required) Username or alias of the target org. Not required if the `target-org`
                                   configuration variable is already set.
  -r, --override-name=<value>      override Permission Set Name generated from Profile name
      --api-version=<value>        Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  convert a Profile to a Permission Set [BETA]

  this command converts in the target org a Profile to a Permission Set.

  It will not use Profiles stored locally in your project but it will:

  - dynamically retrieve the full Profile from your target org
  - convert it to a Permission Set
  - deploy it to the target org

  No update to local Profile or Permission Set is done, but you'll be able to manually retrieve the created/updated
  Permission Set

EXAMPLES
  sf texei profile convert --profile-name 'My Profile'
```

_See code: [src/commands/texei/profile/convert.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/profile/convert.ts)_

## `sfdx texei:profile:empty`

empty a Profile directly in an Org [BETA]

```
USAGE
  $ sfdx texei:profile:empty -o <value> -n <value> [--json] [--flags-dir <value>] [--api-version <value>] [-p]

FLAGS
  -n, --profile-name=<value>  (required) name of the Profile in the target org to empty
  -o, --target-org=<value>    (required) Username or alias of the target org. Not required if the `target-org`
                              configuration variable is already set.
  -p, --no-prompt             allow to empty the Profile without confirmation
      --api-version=<value>   Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  empty a Profile directly in an Org [BETA]

  this command will empty a Profile, only leaving mandatory Permissions

  No update to local Profile is done, but you'll be able to manually retrieve the updated Profile if needed

  This command is based on the Profile metadata retrieved from the READ call of the Metadata API, which can have a few
  glitches like some applications or objects access not returned.

EXAMPLES
  sf texei profile empty --profile-name 'My Profile'
```

_See code: [src/commands/texei/profile/empty.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/profile/empty.ts)_

## `sfdx texei:sharedactivities:enable`

[DEPRECATED - Use the SharedActivities feature instead] Enable Shared Activities

```
USAGE
  $ sfdx texei:sharedactivities:enable -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei sharedactivities enable
```

_See code: [src/commands/texei/sharedactivities/enable.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/sharedactivities/enable.ts)_

## `sfdx texei:sharingcalc:recalculate`

recalculate sharing rules

```
USAGE
  $ sfdx texei:sharingcalc:recalculate -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-s sharingRule]
    [--navigation-timeout <value>] [--selector-timeout <value>]

FLAGS
  -o, --target-org=<value>          (required) Username or alias of the target org. Not required if the `target-org`
                                    configuration variable is already set.
  -s, --scope=<option>              [default: sharingRule] scope of recalculation
                                    <options: sharingRule>
      --api-version=<value>         Override the api version used for api requests made by this command
      --navigation-timeout=<value>  Navigation timeout in seconds (default: 60)
      --selector-timeout=<value>    Selector timeout in seconds (default: 30)s

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei sharingcalc recalculate"
  Recalculated Sharing Rules
```

_See code: [src/commands/texei/sharingcalc/recalculate.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/sharingcalc/recalculate.ts)_

## `sfdx texei:sharingcalc:resume`

resumed sharing calculation

```
USAGE
  $ sfdx texei:sharingcalc:resume -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-s
    sharingRule|groupMembership] [-t <value>] [--navigation-timeout <value>] [--selector-timeout <value>]

FLAGS
  -o, --target-org=<value>          (required) Username or alias of the target org. Not required if the `target-org`
                                    configuration variable is already set.
  -s, --scope=<option>              [default: sharingRule] scope of resumed calculations
                                    <options: sharingRule|groupMembership>
  -t, --timeout=<value>             [default: 120000] Timeout for the sfdx command, in milliseconds
      --api-version=<value>         Override the api version used for api requests made by this command
      --navigation-timeout=<value>  Navigation timeout in seconds (default: 60)
      --selector-timeout=<value>    Selector timeout in seconds (default: 30)

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei sharingcalc resume"
  Sharing calculations resumed
```

_See code: [src/commands/texei/sharingcalc/resume.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/sharingcalc/resume.ts)_

## `sfdx texei:sharingcalc:suspend`

suspend sharing calculation

```
USAGE
  $ sfdx texei:sharingcalc:suspend -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-s
    sharingRule|groupMembership] [-t <value>] [--navigation-timeout <value>] [--selector-timeout <value>]

FLAGS
  -o, --target-org=<value>          (required) Username or alias of the target org. Not required if the `target-org`
                                    configuration variable is already set.
  -s, --scope=<option>              [default: sharingRule] scope of suspended calculations
                                    <options: sharingRule|groupMembership>
  -t, --timeout=<value>             [default: 120000] Timeout for the sfdx command, in milliseconds
      --api-version=<value>         Override the api version used for api requests made by this command
      --navigation-timeout=<value>  Navigation timeout in seconds (default: 60)
      --selector-timeout=<value>    Selector timeout in seconds (default: 30)

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei sharingcalc suspend"
  Sharing calculations suspended
```

_See code: [src/commands/texei/sharingcalc/suspend.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/sharingcalc/suspend.ts)_

## `sfdx texei:skinnyprofile:check`

check that a profile doesn't contain non profile-specific metadata

```
USAGE
  $ sfdx texei:skinnyprofile:check [--json] [--flags-dir <value>] [-p <value>]

FLAGS
  -p, --path=<value>  path to profiles folder. Default: default package directory

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei skinnyprofile check
```

_See code: [src/commands/texei/skinnyprofile/check.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/skinnyprofile/check.ts)_

## `sfdx texei:skinnyprofile:create`

create a profile on target org with minimum access

```
USAGE
  $ sfdx texei:skinnyprofile:create -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-p <value>] [-i]

FLAGS
  -i, --ignoreerrors         if any profile creation fails, command exits as succeeded anyway
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --path=<value>         path to profiles folder. Default: default package directory
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  create a profile on target org with minimum access

  This command:

  - looks at all Profiles in your target org
  - looks at all custom Profiles in your project that are not in your target org
  - create all custom Profiles missing in your target org as empty Profiles

  The command creates Profiles one by one, so if one Profile creation fails (for instance a local Profile is using a
  license not available in the org), all previous Profiles will still be created in the org.

EXAMPLES
  sf texei skinnyprofile create
```

_See code: [src/commands/texei/skinnyprofile/create.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/skinnyprofile/create.ts)_

## `sfdx texei:skinnyprofile:retrieve`

export a skinny profile with just profile-specific metadata

```
USAGE
  $ sfdx texei:skinnyprofile:retrieve -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-t <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -t, --timeout=<value>      timeout(ms) for profile retrieve (Default: 60000ms)
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  export a skinny profile with just profile-specific metadata

  This command will retrieve Profiles, and keep only what can't be on a Permission Set. All other reference to metadata
  will be removed.
  Only access to what's in your project will be listed in the Profile metadata.

  The command:

  - list all Profiles in local project
  - look at Page Layouts, Record Types and Custom Applications in your local project
  - will retrieve listed Profiles with access rights for metadata from the previous step
  - will keep access for Page Layouts, default Record Types and Default custom application
  - will remove everything that should be on a Permission Set(Field Level Security, Apex Classes access, Tab
  visibilities, etc...)
  - save the Profiles locally

EXAMPLES
  sf texei skinnyprofile retrieve --target-org MyScratchOrg
```

_See code: [src/commands/texei/skinnyprofile/retrieve.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/skinnyprofile/retrieve.ts)_

## `sfdx texei:source:customlabel:replace`

replace custom label value

```
USAGE
  $ sfdx texei:source:customlabel:replace -l <value> -v <value> [--json] [--flags-dir <value>] [-p <value>]

FLAGS
  -l, --label=<value>  (required) custom label to replace
  -p, --path=<value>   path to custom label
  -v, --value=<value>  (required) new custom label

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei source customlabel replace --label GreatSalesforceBlog --value https://blog.texei.com
```

_See code: [src/commands/texei/source/customlabel/replace.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/source/customlabel/replace.ts)_

## `sfdx texei:source:flow:convert`

Convert a Flow to a Subflow

```
USAGE
  $ sfdx texei:source:flow:convert -n <value> [--json] [--flags-dir <value>] [-p <value>] [-s <value>]

FLAGS
  -n, --name=<value>               (required) Name of the Flow to convert
  -p, --path=<value>               Path of flows folder (default: force-app/main/default/flows)
  -s, --save-to-file-name=<value>  Name of for new Flow file. If not provided, converted source Flow is overridden

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Convert a Flow to a Subflow

  This command converts a record-triggered flow to a subflow, either by overriding it (default behavior) or saving it to
  a new file.
  If the source Flow has Entry Conditions there are not kept (subflows don't have entry conditions) and a warning is
  displayed.

EXAMPLES
  sf texei source flow convert --name My_Flow --save-to-file-name My_Converted_Flow
```

_See code: [src/commands/texei/source/flow/convert.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/source/flow/convert.ts)_

## `sfdx texei:source:layouts:cleanorg`

delete unused standard layouts from scratch org

```
USAGE
  $ sfdx texei:source:layouts:cleanorg -o <value> -v <value> [--json] [--flags-dir <value>] [--api-version <value>] [-p
  <value>]

FLAGS
  -o, --target-org=<value>      (required) Username or alias of the target org. Not required if the `target-org`
                                configuration variable is already set.
  -p, --path=<value>            path to layouts
  -v, --target-dev-hub=<value>  (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                configuration variable is already set.
      --api-version=<value>     Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf texei source layouts cleanorg

  $ sf texei source layouts cleanorg --target-org myScratchOrg
```

_See code: [src/commands/texei/source/layouts/cleanorg.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/source/layouts/cleanorg.ts)_

## `sfdx texei:user:update`

updates the current user of a scratch org

```
USAGE
  $ sfdx texei:user:update -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-v <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -v, --values=<value>       the <fieldName>=<value> pairs you’re updating
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  sf texei user update --target-org myOrg@example.com --values "LanguageLocaleKey='fr'"
  Successfully updated record: 005D2A90N8A11SVPE2.

  sf texei user update  --values "UserPermissionsKnowledgeUser=true" --json

  sf texei user update  --values "LanguageLocaleKey=en_US UserPermissionsMarketingUser=true" --json
```

_See code: [src/commands/texei/user/update.ts](https://github.com/sl-mikaelodokine/texei-sfdx-plugin/blob/v2.9.0/src/commands/texei/user/update.ts)_

<!-- commandsstop -->

<!-- commandsstop -->
