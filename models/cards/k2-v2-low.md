---
type: Model
title: K2-V2 (low)
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
  knowledge: { s: 30.8, z: -0.78, r: 38.3, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 13.9, z: -1.17, r: 32.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -1.06, r: 34.0, estimated: false }  # 긴문맥
  instruction: { s: 40.5, z: -0.41, r: 43.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# K2-V2 (low)

Institute of Foundation Models · Open · Medium(70B) · 컨텍스트 512k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 38.3 | -0.78 | 실측 | [[gpqa-diamond]] 54.1414%×0.4, [[humanitys-last-exam]] 3.61446%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 54.1414%×1.0, [[humanitys-last-exam]] 3.61446%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 32.4 | -1.17 | 실측 | [[tau2-bench]] 20.7602%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.0 | -1.06 | 실측 | [[aa-lcr]] 20.3333%×1.0 |
| 지시 따르기 | 43.8 | -0.41 | 실측 | [[ifbench]] 40.9524%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
