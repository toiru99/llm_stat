---
type: Model
title: Claude Opus 4.6 (non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 49.0139860301038
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.6, z: 0.62, r: 59.4, estimated: false }  # 전문 지식
  reasoning: { s: 39.5, z: 0.21, r: 53.2, estimated: false }  # 추론
  coding: { s: 73.6, z: 1.1, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 79.6, z: 1.14, r: 67.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.4, z: 0.31, r: 54.6, estimated: false }  # 멀티모달
  long_context: { s: 75.6, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 45.7, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Opus 4.6 (non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 49.0139860301038 t/s · TTFT 2.16004511866673s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.4 | +0.62 | 실측 | [[gpqa-diamond]] 84.0404%×0.4, [[humanitys-last-exam]] 19.0918%×0.3 |
| 추론 | 53.2 | +0.21 | 실측 | [[critpt]] 2.84082%×1.0, [[gpqa-diamond]] 84.0404%×1.0, [[humanitys-last-exam]] 19.0918%×1.0 |
| 코딩 | 66.4 | +1.1 | 실측 | [[terminal-bench]] 48.4848%×0.5 |
| 에이전트 | 67.2 | +1.14 | 실측 | [[tau2-bench]] 84.7953%×1.0, [[terminal-bench]] 48.4848%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.6 | +0.31 | 실측 | [[mmmu-pro]] 72.5434%×1.0 |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 67%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 44.6259%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
