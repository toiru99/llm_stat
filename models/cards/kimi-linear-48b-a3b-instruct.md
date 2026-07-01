---
type: Model
title: Kimi Linear 48B A3B Instruct
creator: Kimi
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
radar:
  knowledge: { s: 22.3, z: -1.38, r: 29.2, estimated: false }  # 전문 지식
  reasoning: { s: 20.0, z: -1.22, r: 31.7, estimated: false }  # 추론
  coding: { s: 28.0, z: -1.45, r: 28.2, estimated: false }  # 코딩
  agentic: { s: 8.7, z: -1.69, r: 24.6, estimated: false }  # 에이전트
  trust: { s: 48.8, z: 0.45, r: 56.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.1, z: -1.31, r: 30.3, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.96, r: 20.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi Linear 48B A3B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Kimi Linear 48B A3B Instruct

Kimi · Open · 컨텍스트 1M · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.2 | -1.38 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 31.7 | -1.22 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 28.2 | -1.45 | 실측 | [[scicode]] 20.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 24.6 | -1.69 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 56.7 | +0.45 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.3 | -1.31 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 20.6 | -1.96 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
