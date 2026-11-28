---
type: Model
title: LFM2 8B A1B
creator: Liquid AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32768
status: past
size_class: Small
params_b: 8.3
is_reasoning: false
radar:
  knowledge: { s: 18.5, z: -1.37, r: 29.4, estimated: false }  # 전문 지식
  reasoning: { s: 11.3, z: -1.19, r: 32.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 5.3, z: -1.47, r: 27.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 19.9, z: -1.27, r: 30.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2 8B A1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# LFM2 8B A1B

Liquid AI · Open · Small(8.3B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 29.4 | -1.37 | 실측 | [[gpqa-diamond]] 34.4444%×0.4, [[humanitys-last-exam]] 4.91196%×0.3 |
| 추론 | 32.2 | -1.19 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 34.4444%×1.0, [[humanitys-last-exam]] 4.91196%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 27.9 | -1.47 | 실측 | [[tau2-bench]] 10.5263%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 30.9 | -1.27 | 실측 | [[ifbench]] 26.2585%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
