---
type: Model
title: Claude Opus 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 52.1011279797873
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.5, z: 1.4, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.24, r: 68.7, estimated: false }  # 추론
  coding: { s: 70.1, z: 0.98, r: 64.7, estimated: false }  # 코딩
  agentic: { s: 81.5, z: 1.21, r: 68.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.3, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 57.6, z: 0.3, r: 54.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude Opus 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 52.1011279797873 t/s · TTFT 31.0875449773949s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.4 | 실측 | [[gpqa-diamond]] 89.596%×0.4, [[humanitys-last-exam]] 39.9444%×0.3 |
| 추론 | 68.7 | +1.24 | 실측 | [[critpt]] 12.5714%×1.0, [[gpqa-diamond]] 89.596%×1.0, [[humanitys-last-exam]] 39.9444%×1.0 |
| 코딩 | 64.7 | +0.98 | 실측 | [[terminal-bench]] 46.2121%×0.5 |
| 에이전트 | 68.2 | +1.21 | 실측 | [[tau2-bench]] 92.1053%×1.0, [[terminal-bench]] 46.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.4335%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 78%×1.0 |
| 지시 따르기 | 54.5 | +0.3 | 실측 | [[ifbench]] 53.1293%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
