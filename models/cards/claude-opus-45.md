---
type: Model
title: Claude Opus 4.5
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 65.3365207941682
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.7, z: 1.02, r: 65.3, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.59, r: 58.9, estimated: false }  # 추론
  coding: { s: 71.3, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 80.8, z: 1.18, r: 67.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.4, z: 0.41, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 0.9, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 64.4, z: 0.58, r: 58.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Claude Opus 4.5

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 65.3365207941682 t/s · TTFT 13.1402546623444s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 65.3 | +1.02 | 실측 | [[gpqa-diamond]] 86.5657%×0.4, [[humanitys-last-exam]] 30.1205%×0.3 |
| 추론 | 58.9 | +0.59 | 실측 | [[critpt]] 4.57143%×1.0, [[gpqa-diamond]] 86.5657%×1.0, [[humanitys-last-exam]] 30.1205%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[terminal-bench]] 46.9697%×0.5 |
| 에이전트 | 67.7 | +1.18 | 실측 | [[tau2-bench]] 89.4737%×1.0, [[terminal-bench]] 46.9697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.1 | +0.41 | 실측 | [[mmmu-pro]] 74.0462%×1.0 |
| 긴문맥 | 63.6 | +0.9 | 실측 | [[aa-lcr]] 77.3333%×1.0 |
| 지시 따르기 | 58.7 | +0.58 | 실측 | [[ifbench]] 57.9592%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
