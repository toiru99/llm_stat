---
type: Model
title: Reka Flash 3
creator: Reka AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.11
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 30.4, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.78, r: 38.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.26, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.18, r: 32.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.2, estimated: false }  # 긴문맥
  instruction: { s: 25.7, z: -1.17, r: 32.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Reka Flash 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Reka Flash 3

Reka AI · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.1 · 출력 $0.2 · 혼합 $0.11/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 52.9%×0.4, [[humanitys-last-exam]] 4.4%×0.3 |
| 추론 | 38.2 | -0.78 | 실측 | [[gpqa-diamond]] 52.9%×1.0, [[humanitys-last-exam]] 4.4%×1.0 |
| 코딩 | 31.0 | -1.26 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.3 | -1.18 | 실측 | [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.2 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 32.5 | -1.17 | 실측 | [[ifbench]] 30.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
