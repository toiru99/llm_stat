---
type: Model
title: MiniMax-M2.1
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.39
output_speed_tps: None
context_window: 204800
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 61.3, z: 0.71, r: 60.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.17, r: 52.5, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.09, r: 51.3, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 0.63, r: 59.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.57, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 81.1, z: 1.27, r: 69.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# MiniMax-M2.1

MiniMax · Open · Large(230B) · 컨텍스트 204k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · None t/s · TTFT Nones · 204k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.71 | 실측 | [[gpqa-diamond]] 83.0303%×0.4, [[humanitys-last-exam]] 23.1696%×0.3 |
| 추론 | 52.5 | +0.17 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 83.0303%×1.0, [[humanitys-last-exam]] 23.1696%×1.0 |
| 코딩 | 51.3 | +0.09 | 실측 | [[terminal-bench]] 28.7879%×0.5 |
| 에이전트 | 59.4 | +0.63 | 실측 | [[tau2-bench]] 85.3801%×1.0, [[terminal-bench]] 28.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.5 | +0.57 | 실측 | [[aa-lcr]] 67.6667%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 실측 | [[ifbench]] 69.8639%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
