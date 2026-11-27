---
type: Model
title: KAT-Coder-Pro V2
creator: KwaiKAT
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 58.8, z: 0.59, r: 58.8, estimated: false }  # 전문 지식
  reasoning: { s: 36.0, z: 0.04, r: 50.6, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 56.0, z: 0.31, r: 54.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 1.09, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# KAT-Coder-Pro V2

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.8 | +0.59 | 실측 | [[gpqa-diamond]] 85.4545%×0.4, [[humanitys-last-exam]] 16.126%×0.3 |
| 추론 | 50.6 | +0.04 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 85.4545%×1.0, [[humanitys-last-exam]] 16.126%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[terminal-bench]] 49.2424%×0.5 |
| 에이전트 | 54.6 | +0.31 | 실측 | [[gdpval]] 741.8 Elo×1.0, [[tau2-bench]] 89.4737%×1.0, [[tau3-banking]] 4.53608%×1.0, [[terminal-bench]] 49.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 73%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 실측 | [[ifbench]] 66.6667%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
