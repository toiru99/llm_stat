---
type: Model
title: GPT-5.5 Instant (May 2026)
creator: OpenAI
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.1, z: 1.13, r: 67.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 63.6, z: 0.91, r: 63.7, estimated: false }  # 코딩
  agentic: { s: 56.6, z: 0.67, r: 60.0, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.34, r: 55.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.2, z: 0.67, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.2, r: 68.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (May 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# GPT-5.5 Instant (May 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 5.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.0 | +1.13 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 63.7 | +0.91 | 실측 | [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 60.0 | +0.67 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 55.0 | +0.34 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.1 | +0.67 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
