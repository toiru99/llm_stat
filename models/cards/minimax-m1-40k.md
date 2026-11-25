---
type: Model
title: MiniMax M1 40k
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 456
is_reasoning: true
radar:
  knowledge: { s: 42.5, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.4, z: 0.16, r: 52.4, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 17.7, z: -1.04, r: 34.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 40.9, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 40k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# MiniMax M1 40k

MiniMax · Open · Large(456B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[gpqa-diamond]] 68.1818%×0.4, [[humanitys-last-exam]] 7.83133%×0.3 |
| 추론 | 52.4 | +0.16 | 실측 | [[gpqa-diamond]] 68.1818%×1.0, [[humanitys-last-exam]] 7.83133%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 34.4 | -1.04 | 실측 | [[tau2-bench]] 31.5789%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 41.2245%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
