---
type: Model
title: GPT-5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 63.1023554692065
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.8, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 36.9, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 40.2, z: 0.01, r: 50.1, estimated: false }  # 코딩
  agentic: { s: 62.6, z: 0.61, r: 59.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.0, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: 73.6, z: 0.59, r: 58.9, estimated: true }  # 긴문맥
  instruction: { s: 76.5, z: 0.95, r: 64.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 63.1023554692065 t/s · TTFT 14.6486785163111s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[gpqa-diamond]] 80.8080808080808%×0.4, [[humanitys-last-exam]] 19.5551436515292%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 80.8080808080808%×1.0, [[humanitys-last-exam]] 19.5551436515292%×1.0 |
| 코딩 | 50.1 | +0.01 | 실측 | [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 59.2 | +0.61 | 실측 | [[tau2-bench]] 84.21052631578951%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 73.757225433526%×1.0 |
| 긴문맥 | 58.9 | +0.59 | 추정 | (추정) |
| 지시 따르기 | 64.2 | +0.95 | 실측 | [[ifbench]] 66.5986394557823%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
