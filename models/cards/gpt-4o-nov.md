---
type: Model
title: GPT-4o (Nov)
creator: OpenAI
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: 2.55
output_speed_tps: 131.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.9, z: -0.53, r: 42.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.6, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.7, r: 39.5, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 61.9, z: 1.77, r: 76.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.1, z: 0.18, r: 52.7, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.9, r: 36.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-4o (Nov)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.55/1M · 131.0 t/s · TTFT 1.03s · 128k ctx` · 가성비 2.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 39.5 | -0.7 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 76.5 | +1.77 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.7 | +0.18 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 36.5 | -0.9 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
