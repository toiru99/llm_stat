---
type: Model
title: Sarvam 30B (high)
creator: Sarvam
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: current
size_class: Small
params_b: 32.2
is_reasoning: true
radar:
  knowledge: { s: 39.2, z: -0.37, r: 44.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 19.1, z: -0.99, r: 35.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 20.2, z: -1.26, r: 31.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sarvam 30B (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Sarvam 30B (high)

Sarvam · Open · Small(32.2B) · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.4 | -0.37 | 실측 | [[gpqa-diamond]] 63.3333%×0.4, [[humanitys-last-exam]] 7.50695%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 63.3333%×1.0, [[humanitys-last-exam]] 7.50695%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 35.2 | -0.99 | 실측 | [[tau2-bench]] 34.5029%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 31.1 | -1.26 | 실측 | [[ifbench]] 26.4626%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
