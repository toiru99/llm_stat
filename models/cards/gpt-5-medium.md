---
type: Model
title: GPT-5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.34
output_speed_tps: 89.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.4, z: 1.2, r: 68.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.5, z: 0.51, r: 57.7, estimated: false }  # 추론
  coding: { s: 64.7, z: 0.78, r: 61.7, estimated: false }  # 코딩
  agentic: { s: 72.7, z: 1.42, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 22.4, z: -0.25, r: 46.2, estimated: false }  # 신뢰성
  multimodal: { s: 85.5, z: 0.66, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 96.1, z: 1.4, r: 71.0, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# GPT-5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · 89.0 t/s · TTFT 34.4s · 400k ctx` · 가성비 25.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.0 | +1.2 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 57.7 | +0.51 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 61.7 | +0.78 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 71.2 | +1.42 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 46.2 | -0.25 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 60.0 | +0.66 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 71.0 | +1.4 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
