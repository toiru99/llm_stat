---
type: Model
title: DeepSeek R1 (Jan)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 2.2
output_speed_tps: 152.0
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.2, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 42.1, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 37.5, z: 0.01, r: 50.2, estimated: false }  # 코딩
  agentic: { s: 12.3, z: -0.75, r: 38.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.2, z: 0.39, r: 55.8, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 (Jan)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# DeepSeek R1 (Jan)

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $4.0 · 혼합 $2.2/1M · 152.0 t/s · TTFT 1.02s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 50.2 | +0.01 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 38.7 | -0.75 | 실측 | [[gdpval]] 302.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.8 | +0.39 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 40.8 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
