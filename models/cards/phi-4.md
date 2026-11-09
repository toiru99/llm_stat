---
type: Model
title: Phi-4
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1625
output_speed_tps: None
context_window: 16000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.4, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 29.8, z: -0.7, r: 39.5, estimated: false }  # 추론
  coding: { s: 5.8, z: -1.06, r: 34.1, estimated: false }  # 코딩
  agentic: { s: 5.8, z: -0.98, r: 35.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 16.0, z: -1.57, r: 26.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Phi-4

Microsoft · Open · Small · 컨텍스트 16k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.13 · 출력 $0.5 · 혼합 $0.1625/1M · None t/s · TTFT Nones · 16k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[gpqa-diamond]] 57.5%×0.4, [[humanitys-last-exam]] 3.8%×0.3 |
| 추론 | 39.5 | -0.7 | 실측 | [[gpqa-diamond]] 57.5%×1.0, [[humanitys-last-exam]] 3.8%×1.0 |
| 코딩 | 34.1 | -1.06 | 실측 | [[terminal-bench]] 3.8%×0.5 |
| 에이전트 | 35.3 | -0.98 | 실측 | [[terminal-bench]] 3.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 26.5 | -1.57 | 실측 | [[ifbench]] 23.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
