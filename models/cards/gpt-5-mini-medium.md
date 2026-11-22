---
type: Model
title: GPT-5 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 84.4225853251831
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.3, z: 0.38, r: 55.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.02, r: 49.8, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.12, r: 51.8, estimated: false }  # 코딩
  agentic: { s: 57.7, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.5, z: 0.05, r: 50.8, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 82.9, z: 1.21, r: 68.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-5 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 84.4225853251831 t/s · TTFT 9.70613896500071s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.8 | +0.38 | 실측 | [[gpqa-diamond]] 80.3030303030303%×0.4, [[humanitys-last-exam]] 15.940685820203901%×0.3 |
| 추론 | 49.8 | -0.02 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 80.3030303030303%×1.0, [[humanitys-last-exam]] 15.940685820203901%×1.0 |
| 코딩 | 51.8 | +0.12 | 실측 | [[terminal-bench]] 28.7878787878788%×0.5 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[tau2-bench]] 71.0526315789474%×1.0, [[terminal-bench]] 28.7878787878788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.8 | +0.05 | 실측 | [[mmmu-pro]] 68.8439306358381%×1.0 |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 72.3333333333333%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 실측 | [[ifbench]] 71.15646258503399%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
