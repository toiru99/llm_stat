---
type: Model
title: DeepSeek V3.2 Speciale
creator: DeepSeek
license: Open
intelligence_index: 22.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 1.26, r: 68.9, estimated: false }  # 전문 지식
  reasoning: { s: 53.9, z: 1.08, r: 66.2, estimated: false }  # 추론
  coding: { s: 66.6, z: 0.87, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 26.5, z: -0.38, r: 44.4, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.76, r: 38.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.86, r: 62.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Speciale
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# DeepSeek V3.2 Speciale

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.9 | +1.26 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 66.2 | +1.08 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 63.1 | +0.87 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 44.4 | -0.38 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
