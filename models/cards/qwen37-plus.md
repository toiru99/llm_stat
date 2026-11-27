---
type: Model
title: Qwen3.7 Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.296
output_speed_tps: 56.4556861395027
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.29, r: 69.3, estimated: false }  # 전문 지식
  reasoning: { s: 55.2, z: 1.0, r: 64.9, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.86, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 62.7, z: 0.55, r: 58.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.0, z: 0.85, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 92.5, z: 1.75, r: 76.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3.7 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.296/1M · 56.4556861395027 t/s · TTFT 2.57985658555995s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.3 | +1.29 | 실측 | [[gpqa-diamond]] 90%×0.4, [[humanitys-last-exam]] 35.6348%×0.3 |
| 추론 | 64.9 | +1.0 | 실측 | [[critpt]] 9.14286%×1.0, [[gpqa-diamond]] 90%×1.0, [[humanitys-last-exam]] 35.6348%×1.0 |
| 코딩 | 63.0 | +0.86 | 실측 | [[scicode]] 46.0648%×1.0, [[terminal-bench]] 46.9697%×0.5 |
| 에이전트 | 58.2 | +0.55 | 실측 | [[gdpval]] 774.45 Elo×1.0, [[tau2-bench]] 92.9825%×1.0, [[tau3-banking]] 17.5258%×1.0, [[terminal-bench]] 46.9697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.7 | +0.85 | 실측 | [[mmmu-pro]] 80.4624%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 73%×1.0 |
| 지시 따르기 | 76.2 | +1.75 | 실측 | [[ifbench]] 77.9592%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
