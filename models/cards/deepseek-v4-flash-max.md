---
type: Model
title: DeepSeek V4 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0622
output_speed_tps: 137.944846871317
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.4, z: 1.21, r: 68.1, estimated: false }  # 전문 지식
  reasoning: { s: 52.7, z: 0.85, r: 62.7, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.68, r: 60.2, estimated: false }  # 코딩
  agentic: { s: 68.4, z: 0.82, r: 62.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 94.2, z: 1.69, r: 75.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# DeepSeek V4 Flash (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1119 · 출력 $0.2338 · 혼합 $0.0622/1M · 137.944846871317 t/s · TTFT 1.48049449526383s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.1 | +1.21 | 실측 | [[gpqa-diamond]] 89.3939393939394%×0.4, [[humanitys-last-exam]] 34.8470806302132%×0.3 |
| 추론 | 62.7 | +0.85 | 실측 | [[critpt]] 7.14285714285714%×1.0, [[gpqa-diamond]] 89.3939393939394%×1.0, [[humanitys-last-exam]] 34.8470806302132%×1.0 |
| 코딩 | 60.2 | +0.68 | 실측 | [[scicode]] 45.2546296296296%×1.0, [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 62.2 | +0.82 | 실측 | [[gdpval]] 1045.03%×1.0, [[tau2-bench]] 95.0292397660819%×1.0, [[tau3-banking]] 30.9278350515464%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 74.3333333333333%×1.0 |
| 지시 따르기 | 75.3 | +1.69 | 실측 | [[ifbench]] 79.1836734693877%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
