---
type: Model
title: LFM2.5-VL-1.6B
creator: Liquid AI
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 32000
status: current
size_class: Tiny
params_b: 1.6
is_reasoning: false
radar:
  knowledge: { s: 11.7, z: -1.41, r: 28.9, estimated: false }  # 전문 지식
  reasoning: { s: 9.7, z: -1.22, r: 31.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: false }  # 코딩
  agentic: { s: 4.0, z: -1.28, r: 30.8, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.06, r: 34.1, estimated: false }  # 신뢰성
  multimodal: { s: 16.7, z: -2.65, r: 10.3, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2.5-VL-1.6B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# LFM2.5-VL-1.6B

Liquid AI · Open · Tiny(1.6B) · 컨텍스트 32k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.9 | -1.41 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.7 | -1.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 30.8 | -1.28 | 실측 | [[tau2-bench]] 8.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.1 | -1.06 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | 10.3 | -2.65 | 실측 | [[mmmu-pro]] 27.0%×1.0 |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
