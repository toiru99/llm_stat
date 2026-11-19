---
type: Model
title: GPT-4o mini
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: 52.7319675348827
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -1.15, r: 32.8, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -0.71, r: 39.3, estimated: false }  # 추론
  coding: { s: 18.0, z: -0.75, r: 38.8, estimated: true }  # 코딩
  agentic: { s: 11.2, z: -1.17, r: 32.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 36.0, z: -1.81, r: 22.9, estimated: false }  # 멀티모달
  long_context: { s: 20.8, z: -0.97, r: 35.4, estimated: true }  # 긴문맥
  instruction: { s: 26.5, z: -1.15, r: 32.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GPT-4o mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1425/1M · 52.7319675348827 t/s · TTFT 2.23497976628608s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.8 | -1.15 | 실측 | [[gpqa-diamond]] 42.6262626262626%×0.4, [[humanitys-last-exam]] 4.2%×0.3 |
| 추론 | 39.3 | -0.71 | 실측 | [[gpqa-diamond]] 42.6262626262626%×1.0, [[humanitys-last-exam]] 4.2%×1.0 |
| 코딩 | 38.8 | -0.75 | 추정 | (추정) |
| 에이전트 | 32.5 | -1.17 | 실측 | [[gdpval]] -15.24%×1.0, [[tau3-banking]] 2.88659793814433%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 22.9 | -1.81 | 실측 | [[mmmu-pro]] 41.5028901734104%×1.0 |
| 긴문맥 | 35.4 | -0.97 | 추정 | (추정) |
| 지시 따르기 | 32.8 | -1.15 | 실측 | [[ifbench]] 30.952380952381%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
