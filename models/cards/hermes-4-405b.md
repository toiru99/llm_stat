---
type: Model
title: Hermes 4 405B
creator: Nous Research
license: Open
intelligence_index: None
price_blended_usd_1m: 1.2
output_speed_tps: 36.6781415972132
context_window: 128000
status: current
size_class: Large
params_b: 406
is_reasoning: true
radar:
  knowledge: { s: 47.3, z: 0.03, r: 50.4, estimated: false }  # 전문 지식
  reasoning: { s: 29.0, z: -0.31, r: 45.4, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 19.8, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.2, z: -1.0, r: 35.1, estimated: false }  # 긴문맥
  instruction: { s: 28.9, z: -0.89, r: 36.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Hermes 4 405B

Nous Research · Open · Large(406B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · 36.6781415972132 t/s · TTFT 4.99938532154964s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.03 | 실측 | [[gpqa-diamond]] 72.7273%×0.4, [[humanitys-last-exam]] 10.8897%×0.3 |
| 추론 | 45.4 | -0.31 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 72.7273%×1.0, [[humanitys-last-exam]] 10.8897%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[terminal-bench]] 11.3636%×0.5 |
| 에이전트 | 35.6 | -0.96 | 실측 | [[tau2-bench]] 22.2222%×1.0, [[terminal-bench]] 11.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.1 | -1.0 | 실측 | [[aa-lcr]] 22.3333%×1.0 |
| 지시 따르기 | 36.6 | -0.89 | 실측 | [[ifbench]] 32.7211%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
