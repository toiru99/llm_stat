---
type: Model
title: DeepSeek V3 0324
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2325
output_speed_tps: 136.0
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.4, z: -0.44, r: 43.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 43.1, z: 0.2, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 12.2, z: -0.75, r: 38.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.19, r: 47.2, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 0324
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# DeepSeek V3 0324

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.24 · 출력 $0.9 · 혼합 $0.2325/1M · 136.0 t/s · TTFT 0.75s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.4 | -0.44 | 실측 | [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 53.1 | +0.2 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 38.7 | -0.75 | 실측 | [[gdpval]] 77.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.2 | -0.19 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
