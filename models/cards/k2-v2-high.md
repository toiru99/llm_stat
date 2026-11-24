---
type: Model
title: K2-V2 (high)
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: past
size_class: Medium
params_b: 70
is_reasoning: true
radar:
  knowledge: { s: 44.1, z: -0.13, r: 48.0, estimated: false }  # 전문 지식
  reasoning: { s: 26.8, z: -0.42, r: 43.8, estimated: false }  # 추론
  coding: { s: 14.9, z: -0.88, r: 36.8, estimated: false }  # 코딩
  agentic: { s: 21.5, z: -0.9, r: 36.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.5, z: -0.56, r: 41.6, estimated: false }  # 긴문맥
  instruction: { s: 67.4, z: 0.71, r: 60.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# K2-V2 (high)

Institute of Foundation Models · Open · Medium(70B) · 컨텍스트 512k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.0 | -0.13 | 실측 | [[gpqa-diamond]] 68.0808%×0.4, [[humanitys-last-exam]] 10.519%×0.3 |
| 추론 | 43.8 | -0.42 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 68.0808%×1.0, [[humanitys-last-exam]] 10.519%×1.0 |
| 코딩 | 36.8 | -0.88 | 실측 | [[terminal-bench]] 9.84848%×0.5 |
| 에이전트 | 36.5 | -0.9 | 실측 | [[tau2-bench]] 27.7778%×1.0, [[terminal-bench]] 9.84848%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.6 | -0.56 | 실측 | [[aa-lcr]] 35%×1.0 |
| 지시 따르기 | 60.6 | +0.71 | 실측 | [[ifbench]] 60.1361%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
