---
type: Model
title: DeepSeek V3.1 Terminus
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 1.6992
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 54.8, z: 0.39, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 43.4, z: -0.13, r: 48.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 63.0, z: 0.52, r: 57.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V3.1 Terminus

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $1.635 · 출력 $2.75 · 혼합 $1.6992/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.39 | 실측 | [[gpqa-diamond]] 79.1919%×0.4, [[humanitys-last-exam]] 16.3577%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 1.71429%×1.0, [[gpqa-diamond]] 79.1919%×1.0, [[humanitys-last-exam]] 16.3577%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[scicode]] 37.963%×1.0, [[terminal-bench]] 30.303%×0.5 |
| 에이전트 | 48.0 | -0.13 | 실측 | [[gdpval]] 717.51 Elo×1.0, [[tau2-bench]] 37.1345%×1.0, [[tau3-banking]] 21.0309%×1.0, [[terminal-bench]] 30.303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 69.3333%×1.0 |
| 지시 따르기 | 57.9 | +0.52 | 실측 | [[ifbench]] 57.0068%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
