---
type: Model
title: Exaone 4.0 1.2B
creator: LG AI Research
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
radar:
  knowledge: { s: 14.4, z: -1.75, r: 23.8, estimated: false }  # 전문 지식
  reasoning: { s: 15.7, z: -1.43, r: 28.5, estimated: false }  # 추론
  coding: { s: 7.8, z: -2.35, r: 14.7, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.64, r: 25.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -2.59, r: 11.2, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -2.14, r: 17.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Exaone 4.0 1.2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Exaone 4.0 1.2B

LG AI Research · Open · 컨텍스트 64k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.8 | -1.75 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 28.5 | -1.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 14.7 | -2.35 | 실측 | [[scicode]] 7.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 25.5 | -1.64 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 11.2 | -2.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 17.9 | -2.14 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
