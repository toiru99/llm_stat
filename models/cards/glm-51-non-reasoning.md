---
type: Model
title: GLM-5.1 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.846
output_speed_tps: 75.51203950886918
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 64.7, z: 0.85, r: 62.8, estimated: false }  # 전문 지식
  reasoning: { s: 40.8, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 76.0, z: 1.09, r: 66.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.2, z: 0.2, r: 53.1, estimated: false }  # 긴문맥
  instruction: { s: 56.0, z: 0.1, r: 51.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GLM-5.1 (non-reasoning)

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.285 · 출력 $4.07 · 혼합 $0.846/1M · 75.51203950886918 t/s · TTFT 3.3910475576194288s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.8 | +0.85 | 실측 | [[gpqa-diamond]] 83.93939393939391%×0.4, [[humanitys-last-exam]] 27.9425393883225%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.93939393939391%×1.0, [[humanitys-last-exam]] 27.9425393883225%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 66.3 | +1.09 | 실측 | [[tau2-bench]] 97.07602339181291%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.1 | +0.2 | 실측 | [[aa-lcr]] 53.3333333333333%×1.0 |
| 지시 따르기 | 51.4 | +0.1 | 실측 | [[ifbench]] 51.9727891156463%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
