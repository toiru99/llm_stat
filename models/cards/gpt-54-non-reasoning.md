---
type: Model
title: GPT-5.4 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 2.175
output_speed_tps: 75.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 53.2, z: 0.46, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.8, z: -0.25, r: 46.3, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.66, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 57.6, z: 0.79, r: 61.8, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.63, r: 40.6, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.23, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 65.2, z: 0.37, r: 55.5, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.16, r: 47.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-5.4 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 75.0 t/s · TTFT 0.86s · 1M ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.46 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 46.3 | -0.25 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 60.0 | +0.66 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 61.8 | +0.79 | 실측 | [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 53.4 | +0.23 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 55.5 | +0.37 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 47.6 | -0.16 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
