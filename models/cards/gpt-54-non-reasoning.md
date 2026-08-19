---
type: Model
title: GPT-5.4 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 2.175
output_speed_tps: 90.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.3, z: 0.62, r: 59.3, estimated: false }  # 전문 지식
  reasoning: { s: 32.7, z: -0.14, r: 48.0, estimated: false }  # 추론
  coding: { s: 71.4, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 47.0, z: 0.4, r: 56.0, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.53, r: 42.0, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 65.1, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.15, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# GPT-5.4 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 90.0 t/s · TTFT 0.83s · 1M ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.3 | +0.62 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.0 | -0.14 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 56.0 | +0.4 | 실측 | [[tau2-bench]] 36.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 47.8 | -0.15 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
