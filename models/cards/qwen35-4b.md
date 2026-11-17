---
type: Model
title: Qwen3.5 4B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.042
output_speed_tps: 37.391198117960755
context_window: 262144
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.6, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.0, z: -0.27, r: 46.0, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.41, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 44.5, z: -0.0, r: 49.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.16, r: 47.5, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.53, r: 57.9, estimated: false }  # 긴문맥
  instruction: { s: 56.0, z: 0.1, r: 51.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.5 4B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · 37.391198117960755 t/s · TTFT 1.364115602514237s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[gpqa-diamond]] 77.0707070707071%×0.4, [[humanitys-last-exam]] 9.91658943466172%×0.3 |
| 추론 | 46.0 | -0.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0707070707071%×1.0, [[humanitys-last-exam]] 9.91658943466172%×1.0 |
| 코딩 | 43.8 | -0.41 | 실측 | [[terminal-bench]] 18.181818181818198%×0.5 |
| 에이전트 | 49.9 | +-0.0 | 실측 | [[tau2-bench]] 92.1052631578947%×1.0, [[tau3-banking]] 6.8041237113402095%×1.0, [[terminal-bench]] 18.181818181818198%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.5 | -0.16 | 실측 | [[mmmu-pro]] 65.3757225433526%×1.0 |
| 긴문맥 | 57.9 | +0.53 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 51.4 | +0.1 | 실측 | [[ifbench]] 51.9727891156463%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
