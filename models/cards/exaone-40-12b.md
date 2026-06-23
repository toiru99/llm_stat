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
  knowledge: { s: 14.4, z: -1.66, r: 25.1, estimated: false }  # 전문 지식
  reasoning: { s: 15.7, z: -1.36, r: 29.6, estimated: false }  # 추론
  coding: { s: 7.8, z: -2.23, r: 16.6, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.66, r: 25.2, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.97, r: 35.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -2.53, r: 12.1, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -2.03, r: 19.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Exaone 4.0 1.2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
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
| 전문 지식 | 25.1 | -1.66 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 29.6 | -1.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 16.6 | -2.23 | 실측 | [[scicode]] 7.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 25.2 | -1.66 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 35.5 | -0.97 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 12.1 | -2.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 19.5 | -2.03 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
