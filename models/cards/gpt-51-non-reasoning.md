---
type: Model
title: GPT-5.1 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 1.3375
output_speed_tps: 89.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.5, z: 0.03, r: 50.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.2, z: -0.57, r: 41.5, estimated: false }  # 추론
  coding: { s: 34.8, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 40.7, z: 0.12, r: 51.8, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 65.3, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: 0.05, r: 50.7, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.37, r: 44.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-5.1 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 89.0 t/s · TTFT 1.12s · 400k ctx` · 가성비 10.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.03 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.5 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 51.8 | +0.12 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 50.7 | +0.05 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 44.4 | -0.37 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
