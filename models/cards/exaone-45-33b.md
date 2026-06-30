---
type: Model
title: EXAONE 4.5 33B
creator: LG AI Research
license: Open
intelligence_index: 23.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
radar:
  knowledge: { s: 37.7, z: -0.6, r: 40.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.4, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 41.7, z: -0.77, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 55.3, z: 0.18, r: 52.7, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.51, r: 42.3, estimated: false }  # 신뢰성
  multimodal: { s: 70.7, z: -0.22, r: 46.6, estimated: false }  # 멀티모달
  long_context: { s: 66.2, z: -0.14, r: 47.9, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: -0.09, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.5 33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# EXAONE 4.5 33B

LG AI Research · Open · 컨텍스트 262k · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.9 | -0.6 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 38.5 | -0.77 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 52.7 | +0.18 | 실측 | [[tau2-bench]] 78.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 42.3 | -0.51 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 46.6 | -0.22 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 47.9 | -0.14 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 48.7 | -0.09 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
