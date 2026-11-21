---
type: Model
title: GPT-5.6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 91.4443154661455
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.4, z: 1.16, r: 67.4, estimated: false }  # 전문 지식
  reasoning: { s: 60.8, z: 1.24, r: 68.7, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.14, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 62.8, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.1, z: 0.65, r: 59.7, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 91.4443154661455 t/s · TTFT 8.19233573099526s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.4 | +1.16 | 실측 | [[gpqa-diamond]] 89.1919191919192%×0.4, [[humanitys-last-exam]] 33.4105653382762%×0.3 |
| 추론 | 68.7 | +1.24 | 실측 | [[critpt]] 16.5714285714286%×1.0, [[gpqa-diamond]] 89.1919191919192%×1.0, [[humanitys-last-exam]] 33.4105653382762%×1.0 |
| 코딩 | 67.0 | +1.14 | 실측 | [[scicode]] 51.6203703703704%×1.0 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[gdpval]] 1338.75%×1.0, [[tau3-banking]] 25.1546391752577%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.7 | +0.65 | 실측 | [[mmmu-pro]] 77.5722543352601%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
