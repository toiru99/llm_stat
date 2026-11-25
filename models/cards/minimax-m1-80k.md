---
type: Model
title: MiniMax M1 80k
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.715
output_speed_tps: 51.5983754952936
context_window: 1000000
status: past
size_class: Large
params_b: 456
is_reasoning: true
radar:
  knowledge: { s: 44.2, z: -0.13, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 26.7, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.23, r: 31.6, estimated: false }  # 코딩
  agentic: { s: 19.6, z: -0.97, r: 35.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.0, z: 0.22, r: 53.4, estimated: false }  # 긴문맥
  instruction: { s: 41.6, z: -0.37, r: 44.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 80k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# MiniMax M1 80k

MiniMax · Open · Large(456B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.715/1M · 51.5983754952936 t/s · TTFT 4.19678415796666s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.13 | 실측 | [[gpqa-diamond]] 69.697%×0.4, [[humanitys-last-exam]] 8.89713%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.697%×1.0, [[humanitys-last-exam]] 8.89713%×1.0 |
| 코딩 | 31.6 | -1.23 | 실측 | [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 35.4 | -0.97 | 실측 | [[tau2-bench]] 34.2105%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.4 | +0.22 | 실측 | [[aa-lcr]] 57.6667%×1.0 |
| 지시 따르기 | 44.5 | -0.37 | 실측 | [[ifbench]] 41.7687%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
