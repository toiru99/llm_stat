---
type: Model
title: DeepSeek V3.2 Speciale
creator: DeepSeek
license: Open
intelligence_index: 14.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.7, z: 0.93, r: 63.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.7, z: 0.74, r: 61.0, estimated: false }  # 추론
  coding: { s: 53.0, z: 0.57, r: 58.5, estimated: false }  # 코딩
  agentic: { s: 26.5, z: -0.47, r: 43.0, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.8, r: 38.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.79, r: 61.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Speciale
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# DeepSeek V3.2 Speciale

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.9 | +0.93 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 61.0 | +0.74 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 58.5 | +0.57 | 실측 | [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 43.0 | -0.47 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 38.0 | -0.8 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 61.8 | +0.79 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
